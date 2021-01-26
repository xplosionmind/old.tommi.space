---
date: 2020-02-01
updated: 2021-01-17T08:15:22.267800+01:00
tags: meta
aliases: ["The Jar", "Jar", "Marmelade"]
permalink: /jam
redirect_from: ["/the-jam", "/thejar", "/thejam", "/the-jar", "/marmelade"]
ref: jam
toc: false
todo:
  - "explain link colors (yellow external, blue internal (how to make it valid with theme changing))"
---
Online, you may stumble upon it as a <a href="https://dev.to/jbranchaud/the-digital-garden-l10" rel="noener noreferrer" target="_blank" title="The Digital Garden on DEV.to"><cite>Digital Garden</cite></a>, or it may be defined as a *[[Zettelkasten]] system*. Mine, instead, it's definitely less ambitious; yet, it's whipped, fragmented, juicy and sweet. It is a <strong><cite><a href="/jam" rel="noopener noreferrer" target="_blank" title="The Jam">The Jam</a></cite></strong>.

I happen to make curious discoveries, as well as I end up having interesting thoughts which I need to save before they end up forgotten or while I find the right words to reformulate them and place them in the <a href="/zibenglish" rel="noopener noreferrer" target="_blank" title="Zibaldone"><cite>Zibaldone</cite></a>.

I take all of these things and I make <cite>The Jam</cite> out of them.

From this page, it's possible to start navigating in The Jam. There are two different ways to do this:
- by topic—choosing a tag from the ones below
- by clicking on one of the macro-notes (or <abbr title="Map Of Content">MOC</abbr>) and diving deeper and deeper in growingly branched notes.

Every single element in The Jam is connected to at least another one: at the end of every note, in the *backlinks*, are listed all of the pages which link to the current one.

{% include tags.html %}

<div class="yellow box">
	The key feature which makes The Jam so effective and powerful is the connection among different thoughts. For this reason, in the same jar which contains this The Jam there are several different private and intimate notes. You may encounter links which look [[like this]], you can't click on them, it's totally normal since they're only privately available to me.
</div>
<ul>
	{% assign jam = site.notes %}
	{% for note in jam %}
		{% if note.main %}
			<li><a href="{{ note.url }}">{{ note.title }}</a> - {% if note.description %}{{ note.description | markdownify | strip_html | truncatewords: 30 }}{% else %}{{ note.excerpt | strip_html | truncatewords: 30 }}{% endif %}</li>
		{% endif %}
	{% endfor %}
</ul>
<div class="flex row">
	<a class="red button" style="color:white;" href="/whole-jam" rel="noopener noreferrer" target="_blank" title="The Whole Jar">The Whole Jar</a>
</div>