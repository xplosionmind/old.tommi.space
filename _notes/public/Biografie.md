---
date: 2021-03-13T22:12:00.945758+01:00
updated: 2021-05-25T23:04:28.889450+02:00
tags: people
lang: it
description: 'Una collezione di biografie speciali'
redirect_from: ["/autobiografie", "/autobiographies", "/biographies"]
toc: false
---
Non si tratta solo di chi sono le <a href="/people" title="People">persone</a> e delle cose pazzesche che possono aver detto o fatto; è interessante studiare come raccontino di sé. Questa è una collezione di più o meno brevi ammirevoli biografie.

<ul>
{% for bio in site.data.biografie %}
<li>
<a href="{{ bio.url }}" target="_blank" title="Biografia di {{ bio.name }}">{{ bio.title }}</a>
{% if bio.title != bio.name %}
, {{ bio.who }}
{% endif %}
</li>{% endfor %}
</ul>