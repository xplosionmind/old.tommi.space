---
date: 2021-05-25T17:26:38+02:00
updated: 2022-03-14T12:32:27+01:00
tags: geek
description: Webrings this website belongs to
toc: false
image: /webrings.svg
---
Webrings this website belongs to:

<ul>
	{% for w in webrings %}
		{% if w.joined %}
			<li><a href='{{ w.url }}' title='{{ w.name }}'>{{ w.name }}</a>, joined on <time datetime='{{ w.joined | date: '%Y-%m-%dT%H:%M:%S%:z' }}'>{{ w.joined | date: '%d %B %Y' }}</time></li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

Webrings I am interested in:

<ul>
	{% for w in webrings %}
		<li><a href='{{ w.url }}' title='{{ w.name }}'>{{ w.name }}</a>, joined on <time datetime='{{ w.joined | date: '%Y-%m-%dT%H:%M:%S%:z' }}'>{{ w.joined | date: '%d %B %Y' }}</time></li>
	{% endfor %}
</ul>
