---
date: 2021-03-28T19:18:34+02:00
updated: 2022-02-06T18:49:07+01:00
permalink: /tommi-uguale/
aliases: Tommi =, Tommi Uguale
toc: false
description: 'Tommi =?'
lang: it
descriptions: Elementi di Tommi in altre persone e elementi di altre persone in Tommi
---
{% for p in tommi-uguale -%}
	{% if p.name != '' -%}## {{ p.name }}{% endif -%}
	<figure>
		<a href='{{ p.url }}'>
			{% if p.audio != '' -%}<audio controls src='{{ p.audio }}'></audio>{% endif -%}
			{% if p.image != '' -%}<picture><img src='{{ p.image }}' title='Tommi come {{ p.name }}'></picture>{% endif -%}
		</a>
		{% if p.description != '' -%}<figcaption>{{ p.description | markdownify }}</figcaption>{% endif -%}
	</figure>
	<br />
	<br />
{% endfor -%}
