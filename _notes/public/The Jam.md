---
date: 2020-02-01
updated: 2021-06-11T06:36:46+02:00
tags: meta
aliases: The Jar, Jar, Marmelade
permalink: /jam
redirect_from: [/the-jam,/thejar,/thejam,/the-jar,/marmelade]
ref: jam
toc: false
---
Online, you may stumble upon it as a <a href='https://dev.to/jbranchaud/the-digital-garden-l10' rel='noener noreferrer' target='_blank' title='The Digital Garden on DEV.to'><cite>Digital Garden</cite></a>, or it may be defined as a *[[Zettelkasten]] system*. Mine, instead, is definitely less ambitious; yet, it is whipped, fragmented, juicy and sweet. It is **a Jam**.

I happen to make curious discoveries, as well as I end up having interesting thoughts which I need to save before they end up forgotten or while I find the right words to reformulate them and place them in the <a href='/zibenglish'  target='_blank' title='Zibaldone'><cite>Zibaldone</cite></a>.

I take all of these things and I make <cite>The Jam</cite> out of them.

From this page, it is possible to start navigating in The Jam. There are two different ways to do this:
- by topic — choosing a tag from the ones below
- by clicking on one of the macro-notes (or <abbr title='Map Of Content'>MOC</abbr>s) and diving deeper and deeper in growingly branched notes.

Every single element in The Jam is connected to at least another one: at the end of every note, in the *backlinks*, are listed all of the pages which link to the current one.

{% include tags.html %}

<div class='row'>
	<div class='half column'>
		{% include filter-lang.html %}
	</div>
	<div class='half column flex'>
		<a class='red button' style='color:white;' href='/whole-jam'  target='_blank' title='The Whole Jam'>The whole Jam</a>
	</div>
</div>

<ul>
	{% assign jam = site.notes | where: 'main', 'true' %}
	{% for note in jam %}
		<li lang='{{ note.lang }}'><a href='{{ note.url }}' lang='{{ note.lang }}'>{{ note.title }}</a> - {% if note.description %}{{ note.description | strip_html | truncatewords: 30 }}{% else %}{{ note.excerpt | strip_html | truncatewords: 30 }}{% endif %}</li>
	{% endfor %}
</ul>
<div class='flex row'>
	<a class='red button' style='color:white;' href='/whole-jam'  target='_blank' title='The Whole Jam'>The Whole Jam</a>
</div>

<div class='yellow box'>
	The key feature which makes The Jam so effective and powerful is the connection among different thoughts. For this reason, the same jar which where The Jam is stored contains also notes I chose to keep private. You may encounter links which look [[like this]], you cannot click on them, it is totally normal since they are only privately available to me.
</div>
