---
date: 2020-10-27
updated: 2021-03-15T17:31:42.022539+01:00
tags: geek
redirect_from: ["/great-websites", "/great-internet", "/internet-greatness"]
toc: false
description: "Sources of awesomeness on the World Wide Web."
todo:
  - "definire criteri di appartenenza"
  - "definire tags (#personal, #tool, #service…) e utilizzarli su Telegram"
  - "Telegram API / RSS feed per prendere le cose da lì"
  - "Pubblicare liste di Pocket"
---
<div class="yellow box">
  This list is almost empty. It is a very long for me to add some awesome thing here. The most up to date list of my discoveries can be found in <a href="https://t.me/internet_awesomeness" rel="noener noreferrer" target="_blank" title="Internet Awesomeness on Telegram"><cite>Internet Awesomeness</cite></a>, a Telegram channes where I copy and paste links as soon as I stumble upon them
</div>

<ul>
	{% for web in site.data.internet-awesomeness %}
		<li><a href="{{ web.url }}" rel="noopener noreferrer" target="_blank" title="{% if web.website != nil %}{{ web.website }}">{{ web.website }}{% else %}{{ web.url | remove: "https://" }}">{{ web.url | remove: "https://" }}{% endif %}</a>, {{ web.date | date_to_long_string }}
	{% endfor %}
</ul>