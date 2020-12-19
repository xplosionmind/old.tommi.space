---
date: 2020-10-27
updated: 2020-12-19
redirect_from:
  - /great-websites
  - /great-internet
  - /internet-greatness
toc: 0
---
Sources of awesomeness on the World Wide Web.

This list is almost empty. It's long to me to add some awesome thing here. Every website I add is immediately copied and pasted on the [Telegram channel](https://t.me/internet_awesomeness "Internet Awesomeness Telegram channel")!
{:.razzmatazz .box}

{% for awesome in site.data.internet-awesomeness %}
  - [{{ awesome.name }}]({{ awesome.link }} "{{ awesome.name }}"), added on {{ awesome.date }}
{% endfor %}

<!--

TODO:

definire criteri di appartnenenza

-->