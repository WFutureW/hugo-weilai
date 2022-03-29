<h1 align=center>Portfolio by Sark | <a href="https://sarkxing.design" rel="nofollow">Demo</a></h1>

<h4 align=center>Tangible | Connected | Materiality</h4>
<br>

# Snippets of code
## Image Conversion 
### Convert png to jpg
```bash
for i in *.png; do sips -s format jpeg $i --out $i.jpg;done
```

### Convert png tp webp
```bash
find ./ -type f -name '*.png' -exec sh -c 'cwebp -q 90 -alpha_q 100 -m 6 $1 -o "${1%.png}.webp"' _ {} \;
```

### Convert jpg to webp
```bash
find ./ -type f -name '*.jpg' -exec sh -c 'cwebp $1 -o "${1%.jpg}.webp"' _ {} \;
```

### Convert gif to webp
```bash
find ./ -type f -name '*.gif' -exec sh -c 'gif2webp $1 -o "${1%.gif}.webp"' _ {} \;
```