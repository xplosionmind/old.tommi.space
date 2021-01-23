---
date: 2021-01-09
updated: 2021-01-09
tags: geek web
aliases: ["Meta"]
permalink: /meta
redirect_from: ["/website-log", "/websitelog"]
description: "Since I put a lot of care and attention to details in this website (probably even too much) I figured out it's worth sharing my decisions about implementations and features in a log, so that the overall design philosophy of tommi.space is summarized in one place and I can keep track of my thoughts."
main: true
---
<p class="date">9<sup>th</sup> January 2021</p>

## Sidenotes

Sidenotes are awesome, and after taking a look at [Koos Loijesteijn post](https://www.kooslooijesteijn.net/blog/sidenotes-without-js "Sidenotes without JavaScript") about them, I figured it would be great to implement them on here, too.

I decided not to, for now, for three main reasons:
1. They are impossible to be implemented in Markdown, they need **a lot** of HTML and I don't have the skills for making a Jekyll plugin to transform footnotes in sidenotes (but it may be [[Website log#Sidenotes|a great idea]] to create one)
2. I could easily create an {% raw %}`{% include sidenotes.html %}`{% endraw %} where I could pass as arguments both the note content and the word linked to it, but it wouldn't satisfy me for two reasons:
	1. In the case of printing, it would be a great mess.
	2. On other readers or Markdown parsers outside of Jekyll I'd have a massive chunk of unrendered ugly text
3. Considered the reasons above, <u>it's not worth it</u>. I use footnotes very few times (even though I massively over-use parentheses (as I am doing right now)) and with the lovely arrow[^test] automatically created, it's painless to use them.

### Further reading

- [A lovely overview](https://www.gwern.net/Sidenotes "Sidenotes in Web Design") of sidenotes implementation techniques and a thorough explanation of their philosophy
- [Koos Loijesteijn's sidenotes source code](https://github.com/kslstn/sidenotes "kslstn's “Sidenotes” on GitHub")
- [Tufte CSS](https://edwardtufte.github.io/tufte-css/ "Tufte CSS")

<br>
<br>



[^test]: Lovely arrow test ->