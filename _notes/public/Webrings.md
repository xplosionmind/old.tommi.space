---
date: 2021-05-25T17:26:38.048097+02:00
updated: 2021-05-25T17:26:38.048097+02:00
tags: geek
description: 'Webrings this website belongs to'
redirect_from: ['/wr', '/wrs']
---
<ul>
	{% for w in site.data.webrings %}
		<li><a href='{{ w.url }}' target='_blank' title='{{ w.name }}'>{{ w.name }}</a>, joined on {{ w.date | date_to_long_string }}</li>
	{% endfor %}
</ul>