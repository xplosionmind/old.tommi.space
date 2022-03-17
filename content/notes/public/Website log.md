---
date: 2021-01-09T01:00:00+01:00
updated: 2022-03-14T12:32:59+01:00
tags:
  - draft
  - geek/web
  - meta
aliases: Meta, Changelog
permalink: /meta/
redirect_from:
  - /website-log/
  - /websitelog/
  - /log/
  - /changelog/
description: Since I put a lot of care and attention to details in this website (probably even too much) I figured out it is worth sharing my decisions about implementations and features in a log, so that the overall design philosophy of tommi.space is summarized in one place and I can keep track of my thoughts.
image: https://tommi.space/website-log.png
main: true
---
<p class='date'><time datetime='2021-01-09'>9<sup>th</sup> January 2021</time></p>

## Sidenotes

Sidenotes are awesome, and after taking a look at [Koos Loijesteijn post](https://www.kooslooijesteijn.net/blog/sidenotes-without-js 'Sidenotes without JavaScript') about them, I figured it would be great to implement them on here, too.

I decided not to, for now, for three main reasons:
1. They are impossible to be implemented in Markdown, they need **a lot** of HTML and I don't have the skills for making a Jekyll plugin to transform footnotes in sidenotes (but it may be [[Website log#Sidenotes|a great idea]] to create one)
2. I could easily create an {% raw %}`{% render sidenotes.html %}`{% endraw %} where I could pass as arguments both the note content and the word linked to it, but it wouldn't satisfy me for two reasons:
	1. In the case of printing, it would be a great mess.
	2. On other readers or Markdown parsers outside of Jekyll I'd have a massive chunk of unrendered ugly text
3. Considered the reasons above, <u>it’s not worth it</u>. I use footnotes very few times (even though I massively over-use parentheses (as I am doing right now)) and with the lovely arrow[^test] automatically created, it’s painless to use them.

### Further reading

- [A lovely overview](https://www.gwern.net/Sidenotes 'Sidenotes in Web Design') of sidenotes implementation techniques and a thorough explanation of their philosophy
- [Koos Loijesteijn's sidenotes source code](https://github.com/kslstn/sidenotes 'kslstn's “Sidenotes” on GitHub')
- [Tufte CSS](https://edwardtufte.github.io/tufte-css/ 'Tufte CSS')

<p class='date'><time datetime='2021-03-14'>14 March 2021</time></p>

## Minimalizing

![[Minimalizing]]

## Analytics

+++

<br>
<br>

<p class='date'><time datetime='2021-12-16T00:10:28+01:00'>Thursday 16 December 2021</time></p>

## Search

Notes concerning search implementation.

### Algolia

It is not the best solution in terms of speed and dependance, but it is still valid temporarily. Search functionality is very useful, so it is a trade-off I am willing to accept—temporarily).

Following [these instructions](https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/ 'Quickstart for Using Algolia on Netlify ') the setup is quite simple. What is annoying and long to effectively customize is [the front-end CSS](https://github.com/algolia/autocomplete/blob/next/packages/autocomplete-theme-classic/src/theme.scss 'SCSS source for Algolia’s Autocomplete front-end, on GitHub'), which I eventually decided would be simple to [write from scratch](https://github.com/xplosionmind/tommi.space/blob/main/_sass/_search.scss 'My SCSS partial for Algolia front-end styling') by myself.

<br>
<br>

<p class='date'><time datetime='2021-12-17T00:33:16+01:00'>17 December 2021</time></p>

## Typography and layout

Even though I love [[Typography]], I am never fully convinced about this website layout and design. My concern is not much about coloring, and typesetting, but about layouting, spacing and positioning. I am trying to understand the core of how layouting works by reading at a tremendously slow pace Richard Rutter’s <cite>[[Web Typography]]</cite>.

I will be noting below my doubts and, if solved, my conclusions.

<br>

### Questions

- Before headings, should break tags or CSS margin be used for separation between sections?
	- `<br>` spacing pros
		- effective regardless of the client and the styling
		- full control over exceptions for files
	- CSS spaging pros
		- greater flexibility for changes
		- keeping the content document more clean
- Do <q>quotes</q> from quote tags depend by the language? Which ones should I use?

[^test]: Lovely arrow test ->
