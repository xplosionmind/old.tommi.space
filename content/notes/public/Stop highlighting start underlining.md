---
date: 2020-12-11T01:00:00+01:00
updated: 2022-03-14T14:50:24+01:00
title: Stop highlighting, start underlining
tags: zen wit reading
toc: false
permalink: /underline/
redirect_from:
  - /underlining/
  - /stop-highlighting/
  - /start-underlining/
  - /stop-highlighting-start-underlining/
main: true
---
Highlighting is strong, excessive, distracting, aggressive.  
Underlining is soft, neat, light, instead.

While <mark>highlighting screams</mark>: <q>LOOK AT ME COME ON!</q>, <u>underlining</u> raises a hand and timidly tells you: <q>hey! Remember this!</q>

<mark>Highlighting is egocentric</mark> and annoying, <u>underlining is actually useful</u>: it catches the eye, but without stressing it with too many frills.

Underlining lets you focus on the content, which is what actually matters.

---

What about <span style='color:limegreen'>colored text</span> or **bold text**?\
This is more a matter of [[Design]]. In general, I prefer when there are less colors; it enhances focus.

---

<br>
<br>

## Styling

An appendix for techies: as you may have noticed, underlined text in this website is a bit darker (or brighter, if you are in light mode) than the text. This is because <u>I love when the underlining is subtle an simple</u>. I did this by using a very nice CSS property: [`text-decoration-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style 'text-decoration-style on MDN'). In this website’s CSS I set it up like this:

    /* Instead of using a weaker grey, I decreased the opacity of the original text color, instead */
    * {
    	text-decoration-color: #E3E3E399 !important;
    	/* “!important” has to be added if we want to override the decoration color of <a> tags, which is the same of the link color by default */
    }

<div class='yellow box'>
	<strong>Note</strong>: keep in mind that by using the <code>*</code> selector in CSS, we automatically change also the <del>strikethrough color</del>
</div>