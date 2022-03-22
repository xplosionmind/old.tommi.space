---
date: 2020-05-12T02:00:00+02:00
updated: 2022-03-21T22:45:06+01:00
tags: design
redirect_from: /tipografia/
description: Notes about Typography
image: https://tommi.space/typography.svg
---
Typography is a wonderful world, hidden in plain sight. Here there are some resources for inspiration and study.
A premise: I have a fetish for Typography. I really do. I often find myself tweaking font faces when instead I have much more important and urgent things to take care of, or I spend a long time watching super technical videos and documentaries on the history of design and visual representation of writing. I wonder how would it be if I chose it as my main interest, alto at a professional level. Nevertheless, I love it, and by checking the insights below, you might be struck by its power and beautiful effectiveness, too.

- [<cite>The Vignelli Canon</cite>](https://rationale-design.com/resources/vignelli-canon/ 'The Vignelli Canon on Rationale Design'), a book on design, **the** book on design, by [Massimo Vignelli](https://www.wikiwand.com/en/Massimo_Vignelli 'Massimo Vignelli on Wikipedia') ([a legend](https://nyti.ms/1mzoUBo 'Massimo Vignelli, Visionary Designer Who Untangled the Subway, Dies at 83')). This book inspired me so much that it completely changed how I see the world (and made me fall in love with Typography, too). My notes on the book in [[The Vignelli Canon]].
- [*I font preferiti dagli scrittori italiani*](https://www.ilpost.it/2020/02/09/font-preferiti-scrittori-italiani/ 'I font preferiti dagli scrittori italiani - Il Post'), on [Il Post](https://ilpost.it).
- Articles tagged with “[fonts](https://www.ilpost.it/tag/font/)” on [Il Post](https://ilpost.it).
- [Web Typography](http://webtypography.net/ 'Web Typography'), a website focused on typography on the Web, [Richard Rutter](http://clagnut.com/ 'Richard Rutter'). I bought [[Web Typography|the homonymous book]] on the topic, it is very insightful.
- Google Fonts [About page](https://fonts.google.com/about 'Google Fonts About page').
- Font Forge [guide](http://designwithfontforge.com/en-US/index.html).
- The [Font Library](https://fontlibrary.org/ 'Font Library')’s [Guidebook](https://fontlibrary.org/en/guidebook 'Guidebook page on Font Library').
- [*Helvetica*](https://www.imdb.com/title/tt0847817/ 'Helvetica on IMDb'), a documentary on the most consequential, widespread, revolutionary yet simple typeface of history.
- [The Font Bureau](https://fontbureau.typenetwork.com/ 'The Font Bureau')

![Steve Jobs about the value of Typography](https://youtu.be/UF8uR6Z6KLc?t=209)

<br>
<br>

## Fonts

- [Smelvetica](http://tholman.com/post/smelvetica 'Smelvetica on Tim Holman website'), a funny customization of [Helvetica](https://en.wikipedia.org/wiki/Helvetica 'Helvetica on Wikipedia') by [Tim Holman](https://tholman.com 'Tim Holman's website').
- [Inter](https://rsms.me/inter 'Inter official website'), a wonderful Open Font by [Rasmus Andersson](https://rsms.me 'Rasmus Andersson’s website').   
Update 3<sup>rd</sup> December 2020: I will never stop loving Inter and using it **everywhere**
	- [play with it](https://rsms.me/inter/lab/ 'Inter lab')
	- [why](/genesi#tipografia 'Genesi, tipografia') this website uses Inter
- [Merriweather](https://github.com/SorkinType/Merriweather), ~~the serif font I use on this blog~~ (not anymore), it’s designed by [Eben Sorkin](http://sorkintype.com/about.html 'About Eben Sorkin').   
Update 3<sup>rd</sup> December 2020: I've been deluded: like [Playfair Display](https://github.com/clauseggers/Playfair-Display), it feels AWESOME at the beginning, it then gets itchy and bothering after a while.
- [Graphik](https://commercialtype.com/catalog/graphik), Sans Serif
- Garamond is the most widely used and loved font in the italian publishing industry, and to me it’s the best serif font for narrative writing. [EB Garamond](http://www.georgduffner.at/ebgaramond/ 'EB Garamond official website') is its renewed, open, digitally friendly alternative, and I use it when I want to use serif in my blog. Its designer is [a great guy](http://georgduffner.at/ 'George Duffner personal website')

<br>
<br>

## Custom Font

- define a font name
- cutting the leg of `x`s
- sideways cutting of letter’s legs

<br>
<br>

## Font subsetting

In order to make pages load faster, there are ways to drastically reduce a font file size, by basically removing unused glyphs.

```shellsession
pyftsubset Inter.ttf \
  --unicodes='U+0020-007F,U+00A0-00FF,U+2013-204A,U+2150-215F,U+2190-2199,U+21A9,U+21AF,U+2200,U+2203-2209,U+2211,U+221A,U+2325,U+232B,U+2318,U+237A,U+25E6' \
  --layout-features='' \
  --flavor='woff2' \
  --output-file='inter.woff2'
```