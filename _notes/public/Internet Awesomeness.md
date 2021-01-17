---
date: 2020-10-27
updated: 2021-01-17T10:55:35.283473+01:00
tags: geek, wip
redirect_from: ["/great-websites", "/great-internet", "/internet-greatness"]
toc: false
todo:
  - "definire criteri di appartenenza"
  - "definire tags (#personal, #tool, #service…) e utilizzarli su Telegram"
  - "Telegram API / RSS feed per prendere le cose da lì"
  - "Pubblicare liste di Pocket"
---
Sources of awesomeness on the World Wide Web.

<div class="yellow box">
  This list is almost empty. It's a very long for me to add some awesome thing here. The most up to date list of my discoveries can be found in <a href="https://t.me/internet_awesomeness" rel="noener noreferrer" target="_blank" title="Internet Awesomeness on Telegram"><cite>Internet Awesomeness</cite></a>, a Telegram channes where I copy and paste links as soon as I stumble upon them
</div>

{% for awesome in site.data.internet-awesomeness %}
  - [{{ awesome.name }}]({{ awesome.link }} "{{ awesome.name }}"), added on {{ awesome.date | date_to_long_string }}
{% endfor %}