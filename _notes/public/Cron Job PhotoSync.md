---
date: 2021-04-04T13:07:24.313354+01:00
updated: 2021-04-02T18:39:17.158382+02:00
tags: geek/server
description: 'This Cron Job schedules [[Linuxplosion]] boot, and it switches it off until the following week'
when: "every Monday at 7PM"
toc: false
---
```sh
59 18 * * 1 udisksctl mount -b /dev/sda2 && echo "`date`: Linuxplosion is up and running!" >> ~/rtcwake-log.txt
0 21 * * 1 echo "`date`: Linuxplosion is going back to sleep until next monday at 7PM." >> ~/rtcwake-log.txt && sudo rtcwake -m off -t "$(date -d 'next Monday 18:30' '+%s')"
```

This Cron Job takes place {{ page.when }}.