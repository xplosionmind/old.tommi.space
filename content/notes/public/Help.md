---
date: 2021-05-25T17:52:55+02:00
updated: 2022-03-14T14:58:17+01:00
title: Help!
description: Things I need help with
toc: false
tags: help
---
I would absolutely love to do the things below, but either:
- I am not capable;
- or I do not have time;
- or they are tasks that if done alone are tremendously boring, while with other people become much more enjoyable;
- or I think they are good ideas, but I am not the right person to develop them.

Hence, the purpose of this page is to collect all of the things I need help for. Please note that my head, as [this website’s favicon](/favicon-180.png 'Wide favicon of tommi.space') masterfully displays, is a perpetual explosion, therefore content you find below may belong to the most different fields: <abbr title='Do It Yourself'>DIY</abbr> as well as poetry, computer stuff as well as Philosophy may be involved.

In the case you find something you are interested in among the things below, do not hesitate to <a href='surfing@tommi.space?subject=I can help you with {{ title }}' target='_blank' title='Write me an email'>contact me</a> or <a href='#comment' title='leave a comment'>to drop a comment</a>.

<br>
<br>

<ul>{% for n in collections.jam %}{% if n.tags contains 'help' %}<li><a href='{{ n.url }}' title='{{ n.title }}'>{{ n.title }}</a> - {{ n.data.description }}</li>{% endif %}{% endfor %}</ul>

[contact]: https://tommi.space/contact 'Contact me'
