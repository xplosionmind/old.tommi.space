---
date: 2021-03-29T05:32:27.528245+02:00
updated: 2021-03-29T05:32:27.528245+02:00
tags: geek/apps
description: '<a href="https://pandoc.org" rel="noopener noreferrer" target="_blank" title="Pandoc">Pandoc</a> infos and cheat sheet'
---
## Cheat sheet

Convert a Word file into a Markdown file, following the [CommonMark](https://commonmark.org/ "CommonMark official website") standard
```sh
pandoc ~/Desktop/input.docx -f docx -t commonmark --wrap=none -o ~/Desktop/output.md
```

Convert multiple Word files in a folder in a standalone Markdown file
```sh
pandoc *.docx -f docx -t commonmark --wrap=none -s -o ~/Desktop/output.md
```

<div class="box">
	Replace <code>commonmark</code> with <code>markdown_mmd</code> to have more features
</div>

convert all files in a folder
```sh
for f in *.docx; do pandoc "$f" -f docx -t commonmark --wrap=none -s -o "$f".md; done
```

<br>
<br>

## To learn

- understanding conversion engines, `mactex`, `latex`, etc.
- understanding citation method
	- <https://www.simonlindgren.com/notes/2019/11/15/setup-for-writing-in-markdown-citing-with-zotero-and-publishing-with-pandoc>
- CSS styling

## Resources

- [format options](https://pandoc.org/MANUAL.html#option--from "“--from” in Pandoc manual")