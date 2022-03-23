---
date: 2020-02-01
updated: 2021-11-17T15:19:41+01:00
tags: meta
aliases: The Jar, Jar, Marmelade
layout: page
permalink: /jam/
redirect_from:
  - /the-jam/
  - /jar/
ref: jam
toc: false
todo:
  - update “main” pages
image: /jam.png
---
Online, you may stumble upon it as a <cite>[Digital Garden](https://dev.to/jbranchaud/the-digital-garden-l10 'The Digital Garden on DEV.to')</cite>, or it may be defined as a <em><a lang='de' hreflang='en' href='/zettelkasten' title='Zettelkasten - tommi.space'>Zettelkasten</a> system</em>. Mine, instead, is definitely less ambitious; yet, it is whipped, fragmented, juicy and sweet. It is <b>a jam</b>.

I happen to make curious discoveries, as well as I end up having interesting thoughts which I need to save before they end up forgotten or while I find the right words to reformulate them and place them in the <cite>[Zibaldone](/zibenglish)</cite>.

I take all of these things and I make <cite>The Jam</cite> out of them.

From this page, it is possible to start navigating in The Jam. There are two different ways to do this:
- by topic — choosing a tag from the ones below</li>
- by clicking on one of the macro-notes (or <abbr title='Map Of Content'>MOC</abbr>s) and diving deeper and deeper in growingly branched notes.

Every single element in The Jam is connected to at least another one: at the end of every note, in the <strong><a href='#backlinks' target='_blank' title='This note’s backlinks'>backlinks</a></strong>, are listed all of the pages which link to the current one.

{% render tags.html, site: site -%}

<div class='row'>
	<div class='half column'>
		{% render lang-filter.html, lang: lang -%}
	</div>
	<div class='half column flex'>
		<a class='red button' style='color:white;' href='/whole-jam' title='The Whole Jam'>The whole Jam</a>
	</div>
</div>

<ul>
	{% for note in collections.jam -%}
		{% if note.data.main -%}
			<li lang='{{ note.data.lang }}'>
				<a href='{{ note.url }}' lang='{{ note.data.lang }}' title='{{ note.data.title }}'>{{ note.data.title }}</a>
				{% if note.data.description -%}
					&ensp;—&ensp;{{ note.data.description | markdownify | strip_html | truncatewords: 30 }}
				{% endif -%}
			</li>
		{% endif -%}
	{% endfor -%}
</ul>

<div class='flex row'>
	<a class='red button' style='color:white;' href='/whole-jam' title='The Whole Jam'>The Whole Jam</a>
</div>

<div class='yellow box'>
	The key feature which makes The Jam so effective and powerful is the connection among different thoughts. For this reason, the same jar which where The Jam is stored contains also notes I chose to keep private. You may encounter links which look [[like this]], you cannot click on them, it is totally normal since they are only privately available to me.
</div>
