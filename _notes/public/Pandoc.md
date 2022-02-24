---
date: 2021-03-29T05:32:27+02:00
updated: 2022-02-24T10:51:30+01:00
tags: geek/apps
description: "<a href='https://pandoc.org'  target='_blank' title='Pandoc'>Pandoc</a> infos and cheat sheet"
---
## Cheat sheet

Convert a Word file into a Markdown file, following the [CommonMark](https://commonmark.org/ 'CommonMark official website') standard
```shellsession
pandoc ~/Desktop/input.docx -f docx -t commonmark --wrap=none -o ~/Desktop/output.md
```

Convert multiple Word files in a folder in a standalone Markdown file
```shellsession
pandoc *.docx -f docx -t commonmark_x --wrap=none -s -o ~/Desktop/output.md
```

<div class='box'>
	Replace <code>commonmark</code> with <code>commonmark_x</code> to have more features. See the <a href='https://pandoc.org/MANUAL.html#markdown-variants' target='_blank' title='Markdown variants — Pandoc User’s Guide'>list of supported markdown variants</a>.
</div>

convert all files in a folder
```shellsession
for f in *.docx; do pandoc "$f" -f docx -t commonmark --wrap=none -s -o "$f".md; done
```

![[Academic writing with Pandoc]]

<br>
<br>

## To learn

- understanding conversion engines, `mactex`, `latex`, etc.
- CSS styling
- Wikilinks removal or parsing