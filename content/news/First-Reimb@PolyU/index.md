---
title: "First Reimbursement@PolyU!"
# aliases: ["/template"]
canonicalURL: "https://sarkxing.design/projects/template"
date: "2021-09-16"
description: ""
tags: [""]
cover:
    image: "" # image path/url
    alt: "template-alt" # alt text
    caption: "template-cap" # display caption under cover

# Usually no need to modify
author: "Sark"
ShowToc: false
ShowBreadCrumbs: false
draft: false
---
## Brief

> All PolyU RPg students, irrespective of funding source, will be provided with *Associated Money* during the normal study period (with a reference amount of *HK$20,000*/year for full-time student) to support expenses for their studies and research activities.[^1]

I have owned an Apple Silicon MacBook Air, and expect to spend the associated money, as quoted above, for a monitor instead of buying an all-in-one computer device. As required by the department, I must provide strong justification for purchasing the proposed item.

## Procedure

- Identify your need and propose a model (*e.g., Monitor AOC 34P2C*)
- Draft a document of justification *(see mine in the [attachment](#attachment))*
- Get consent from your chief supervisor *(signed SD SRC Form 04 required [^2])*
- Checked by Emma 
- Approved! *(amount under HK$5,000, chief supervisor's endorsement will be sufficient)*
- Buy and keep all the invoices (*travel expense cannot be reimbursed*)
- Claim the misc. expense to Emma *(signed misc. expenses claim form, undertaking declaration, invoices)*
- Receive reimb. from Financial Office (FO)

### Specs
- ColorSpace DCI-P3 92%
- HDMI * 2, Display Port * 1, Type-C * 1 (power delivery compatible), USB3.0 * 2
- 3440*1440, 21:9, _(HiDPI is not supported on Apple Silicon Macs, yet)_

{{< figure width=500 align=center src="images/CompuMark-store.webp" caption="Location: 深水埗高登電腦中心 1/F 54-56 號舖" title="CompuMark Store" >}}


### TL;DR 
{{< figure align=center src="images/HiDPI.webp" caption="Testing HiDPI support on macOS 12 beta..." title="Ta-da...and hmm..." >}}

So 3440x1440 resolution on a 34-inch panel is literally equivalent to 2K@27-in display, which macOS will see it as non-retina display and consequently disable HiDPI by default. Extra configuration is required to force retina rendering. FYI, [one-key-hidpi](https://github.com/xzhih/one-key-hidpi) does NOT work on Apple Silicon builds due the revision of ACPI table. For Apple Silicon Macs (Monterey beta OS), mirroring the built-in retina display with some tricks in [SwitchResX](https://www.macwk.com/soft/switchresx) would enable 5K (5120x2160) HiDPI rendering on a 3440x1440 monitor. For details, please check the below links. 


#### Attachment
{{<link-button "doc/SD SRC Form 04 - Example.pdf" "Application Form">}}
