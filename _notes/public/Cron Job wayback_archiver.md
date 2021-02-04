---
date: 2021-02-04T13:07:24.313354+01:00
updated: 2021-02-04T13:07:24.313354+01:00
tags: geek geek/server
description: 'A Cron Job which uses <a href="https://github.com/buren/wayback_archiver" rel="noopener noreferrer" target="_blank" title="wayback_archiver source code on GitHub">wayback_archiver</a> to crawl the pages listed in <a href="/pages-to-archive" rel="noopener noreferrer" target="_blank" title="Pages to archive">this web page</a> and save them to <a href="https://web.archive.org" rel="noopener noreferrer" target="_blank" title="The Wayback Machine">The Wayback Machine</a>'
when: "every Monday at 1AM"
toc: false
---
```
0 1 * * 1 /usr/local/bin/wayback_archiver https://tommi.space/pages-to-archive --crawl --limit=100 --verbose --log=$HOME/wayback_archiver.log && echo "\n$(date) wayback_archiver success!" >> $HOME/wayback_archiver.log
```

This Cron Job takes place {{ page.when }}.

I set it up according to the guides in [[Server#Cron Jobs]]