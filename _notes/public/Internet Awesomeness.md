---
date: 2020-10-27
tags: geek
redirect_from: [/great-websites,/great-internet,/internet-greatness]
toc: false
description: Sources of awesomeness on the World Wide Web.
todo:
  - definire criteri di appartenenza
  - 'definire tags (#personal, #tool, #service…) e utilizzarli anche su Telegram'
  - RSS to Telegram channel
---
<div class='yellow box'>
  Join <a href='https://t.me/internet_awesomeness' target='_blank' title='Internet Awesomeness Telegram channe[]()l'><cite>Internet Awesomeness</cite></a> Telegram channel or subscribe to the <a href='/feeds/internet-awesomeness.xml' target='_blank' title='Internet Awesomeness RSS feed'>RSS feed</a> to get new websites I add in real time.
</div>

<ul>
	{% for web in site.data.internet-awesomeness %}
		<li>
			<a href='{{ web.url }}'  target='_blank' title='{% if web.website != nil %}{{ web.website }}'>
				{{ web.website }}{% else %}{{ web.url | remove: 'https://' }}'>{{ web.url | remove: 'https://' }}{% endif %}
			</a>: {{ web.description }} — {{ web.date | date_to_long_string }}</li>
	{% endfor %}
</ul>
