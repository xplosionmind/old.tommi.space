---
date: 2020-02-26
updated: 2021-03-13T22:04:25.251570+01:00
tags: geek idea
aliases: ["Programming ideas", "Development ideas", "Missing Apps"]
description: "Ideas for programs which would be very useful, but I didn't find yet"
permalink: /missing-tools
redirect_from: ["/tools-ideas", "/programming-ideas", "/programming", "/development-ideas", "/developing", "/developing-ideas", "/apps-ideas", "/programs", "/ideas", "/missing-apps", "/missing-programs", "/missing-digital-tools", "/dev-ideas", "/software-ideas", "/sw-ideas"]
main: true
toc: false
---
<ul>
{% for note in site.notes %}
	{% if note.tags contains "idea" and note.tags contains "geek" and note.permalink != "/missing-tools" %}
		<li id="{{ note.title | slugify }}"><strong><a href="{{ note.url }}" target="_blank" title="{{ note.title }}">{{ note.title }}</a></strong>: {% if note.description != nil %}{{ note.description}}{% else %}{{ note.content | strip_html | truncatewords: 30 }}{% endif %}</li>
	{% endif %}
{% endfor %}
</ul>

<br>
<br>

## Making a Telegram Bot

- <https://core.telegram.org/bots>
- <https://www.process.st/telegram-bot/>
- [various languages](https://core.telegram.org/bots/samples)
