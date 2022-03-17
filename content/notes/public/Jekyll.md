---
date: 2021-05-28T22:53:04+02:00
updated: 2022-03-14T14:57:26+01:00
tags:
  - meta
  - geek/apps
description: The tool I build this website with
todo:
  - add the “Jekyll is dead” debacle
---
## Features requests

- Instead of {% raw %}`{% for movie in site.data.watchlist %}`{% endraw %} geting data from the URL of a file at build time, for example {% raw %}`{% for movie in 'https://cloud.publiclink.net/watchlist.csv' %}`{% endraw %}. This should work for data files (YAML, CSV, JSON) but it could also work for partials: {% raw %}`{% render https://example.com/partials/head.html %}`{% endraw %}.
