---
date: 2020-02-26
updated: 2022-03-14T14:55:50+01:00
tags:
  - geek/idea
aliases: Programming ideas, Development ideas, Missing Apps
description: Ideas for programs which would be very useful, but I did not find yet
permalink: /missing-tools/
redirect_from: [/tools-ideas/,/programming-ideas/,/development-ideas/,/developing-ideas,/apps-ideas/,/missing-apps/,/missing-digital-tools/]
main: true
toc: false
---
{{ description }}

{% comment %}FIX<ul>{% for note in collections.jam %}{% for tag in note.tags %}{% if tag contains 'geek/idea' %}<li id='{{ note.data.title | slugify }}'><strong><a href='{{ note.url }}' title='{{ note.data.title }}'>{{ note.data.title }}</a></strong>: {% if note.data.description %}{{ note.data.description}}{% else %}{{ note.data.content | markdownify | strip_html | truncatewords: 30 }}{% endif %}</li>{% endif %}{% endfor %}</ul>{% endcomment %}
