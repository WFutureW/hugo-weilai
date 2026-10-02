(function () {
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-pass");
  var bad = document.getElementById("gate-bad");
  var busy = false;

  function bytesFromBase64(value) {
    var bin = atob(value);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  async function unlock(password) {
    var response = await fetch("demo.enc");
    if (!response.ok) throw new Error("missing");
    var packed = new Uint8Array(await response.arrayBuffer());
    var salt = packed.slice(0, 16);
    var iv = packed.slice(16, 28);
    var data = packed.slice(28);
    var base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    var key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: 120000, hash: "SHA-256" },
      base,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, data);
    var pack = JSON.parse(new TextDecoder().decode(plain));
    var assets = {};
    Object.keys(pack.files).forEach(function (name) {
      var bytes = bytesFromBase64(pack.files[name]);
      var type = name.slice(-4) === ".wav" ? "audio/wav" : "image/png";
      assets[name] = URL.createObjectURL(new Blob([bytes], { type: type }));
    });
    window.YUE_ASSET = assets;
    document.getElementById("gate").remove();
    var style = document.createElement("style");
    style.textContent = pack.css;
    document.head.appendChild(style);
    document.body.insertAdjacentHTML("beforeend", pack.body);
    var script = document.createElement("script");
    script.textContent = pack.js;
    document.body.appendChild(script);
  }

  function primeSpeech() {
    var synth = window.speechSynthesis;
    if (!synth) return;
    try { synth.resume(); } catch (e) {}
    var voices = synth.getVoices();
    var sinji = null;
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name === "Sinji" && voices[i].lang === "zh-HK") sinji = voices[i];
    }
    var utterance = new SpeechSynthesisUtterance(" ");
    utterance.volume = 0;
    utterance.lang = "zh-HK";
    if (sinji) utterance.voice = sinji;
    synth.speak(utterance);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (busy) return;
    busy = true;
    bad.textContent = "";
    primeSpeech();
    unlock(input.value).catch(function () {
      busy = false;
      bad.textContent = "密碼不對。";
    });
  });
})();
