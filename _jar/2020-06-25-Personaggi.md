---
ref: people
edited: 2020-10-26
description: "Personaggi reali e di finzione che ricorderò per sempre"
redirect_from:
  - /persone
---
{% for idol in site.data.people %}
	<h2 class="title">{{ idol.name }}</h2>
	<a href="{{ idol.link }}" rel="noopener noreferrer" target="_blank"><figure><img src="{{ idol.img }}" title="{{ idol.name }}" alt="Una foto che ritrae {{ idol.title }}" /></figure></a>
	<p>{{ idol.description-it }}</p>
	<br />
	<br />
{% endfor %}
