---
date: 2021-12-06T11:39:18+01:00
updated: 2022-03-14T15:03:23+01:00
tags: geek
description: Notes on writing and rendering long writings with citations via PanDoc
permalink: /pandoc-workflow/
redirect_from: ['/academic-writing-with-pandoc/','/pandoc-paper/','/pandoc-bibliography/']
aliases: Thesis writing workflow with Pandoc, Long writing in Markdown
toc: false
image: https://s3.amazonaws.com/libapps/accounts/109251/Screen_Shot_2017-01-06_at_4.18.48_PM.png
---
It is my intention to write my thesis in [[LaTeX]], by using [[Pandoc]] as my main conversion tool. I am noting here my process of defining my workflow.

```shellsession
pandoc -s in.md --citeproc -o out.pdf
```

- `-s` parses the output in one standalone file
- [`--citeproc`](https://pandoc.org/MANUAL.html#option--citeproc '--citeproc in PanDoc’s User Manual') activates citations, references and bibliography processing
- add [`--bibliography`](https://pandoc.org/MANUAL.html#option--bibliography '--bibliography in PanDoc’s User Manual') in the case a `bibliography` field is not present in YAML metadata for the document
- add [`--toc`](https://pandoc.org/MANUAL.html#option--toc '--toc in PanDoc’s User Manual') in the case a Table of Contents is intended to be added and a `toc` boolean (`toc: true`) is not present in YAML metadata for the document

## Resources

- <cite>[Setup for writing in Markdown, citing with Zotero, and publishing with Pandoc](https://www.simonlindgren.com/notes/2019/11/15/setup-for-writing-in-markdown-citing-with-zotero-and-publishing-with-pandoc 'Setup for writing in Markdown, citing with Zotero, and publishing with Pandoc')</cite>
- <cite>[I wrote my thesis in Markdown, here’s how it went](https://medium.com/@krzysztofczarnecki/i-wrote-my-thesis-in-markdown-heres-how-it-went-3f60140dfe65 'I wrote my thesis in Markdown, here’s how it went')</cite>
- [phd_thesis_markdown](https://github.com/tompollard/phd_thesis_markdown 'phd_thesis_markdown repository on GitHub'), a template
- [pandoc-thesis](https://github.com/cagix/pandoc-thesis 'pandoc-thesis repository on GitHub'), a template
- [Delightful Open Science — tools](https://codeberg.org/teaserbot-labs/delightful-open-science#user-content-tools 'easerbot-labs/delightful-open-science: Curated list of resources, organizations and free software that are supporting the field of open science.'), a repository
- [Manubot](https://manubot.org 'Manubot')
- <cite>[The tools and services I used to write, edit and self-publish my book](https://kerkour.com/book-self-publishing-pandoc/ 'The tools and services I used to write, edit and self-publish my book')</cite>, by [Sylvain Kerkour](https://kerkour.com/ 'Sylvain Kerkour’s personal website')
- I take advantage of [obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin 'obsidian-citation-plugin on GitHub') in order to add citations to what I am writing in [Obsidian](https://obsidian.md 'Obsidian')
- [Zotero best practices](https://forum.obsidian.md/t/zotero-best-practices/ 'Zotero best practices') on [Obsidian’s forum](https://forum.obsisian.md 'Obsidian Community Forum')
