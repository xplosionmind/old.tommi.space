---
date: 2021-04-04T17:19:08+02:00
updated: 2022-02-24T10:51:30+01:00
tags: geek/server
description: What Cron Jobs are, how to set them up, what are the ones I use
---
Cron Jobs essentially consist in running some command from the terminal at a predefined time, or every given interval.  
They are great and useful since they can be used to automate any type of task.

<br>
<br>

## Configuration

<br>

### Short answer

Run [`crontab -e`][crontab]

<br>

### Long answers

- [<q>How do I set up a Cron Job?</q>](https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job 'How do I set up a Cron Job? - AskUbuntu') on AskUbuntu
- [Creating a custom Cron Job](https://help.dreamhost.com/hc/en-us/articles/215767047-Creating-a-custom-Cron-Job 'Creating a custom Cron Job'), in DreamHost Knowledge Base
- More detailed information in [Ubuntu Community Help Wiky](https://help.ubuntu.com/community 'Ubuntu Community Help Wik') &rarr; [CronHowto](https://help.ubuntu.com/community/CronHowto 'CronHowto in Ubuntu Community Help Wiki')
- [Crontab Guru](https://crontab.guru 'Crontab Guru'), simple and insightful tool to configure and check [`crontab`s][crontab].

<br>

### Enable logging

Cron Jobs do not log activity by default, to activate logging for an easier debugging, go to `/etc/rsyslog.conf` or `/etc/rsyslog.d/50-default.conf` and uncomment the following line:

```shellsession
cron.*					/var/log/cron.log
```

then run

```shellsession
sudo service rsyslog restart && sudo service cron restart
```

Cron Jobs logs will appear in **`/var/log/cron.log`**

<br>
<br>

## Troubleshooting

- [Solve `(CRON) info (No MTA installed, discarding output)`](https://askubuntu.com/questions/222512/cron-info-no-mta-installed-discarding-output-error-in-the-syslog '“(CRON) info (No MTA installed, discarding output)” error in the syslog')

<br>
<br>

## My Cron Jobs
<br>

### rtcwake

This Cron Job schedules [[Linuxplosion]] boot, and it switches it off until the following week.

```shell
35 18 * * 1 sudo udisksctl mount -b /dev/sda2 && echo "`date`: Linuxplosion is up and running!" >> ~/rtcwake-log.txt
0 21 * * 1 echo "`date`: Linuxplosion is going back to sleep until next monday at 7PM." >> ~/rtcwake-log.txt && sudo rtcwake -m off -t "$(date -d 'next Monday 18:30' '+%s')"
```

<br>

### wayback_archiver

This Cron Job saves a list of predefined pages to [The Wayback Machine](https://web.archive.org 'The Wayback Machine') using [wayback_archiver](https://github.com/buren/wayback_archiver 'wayback_archiver')

```shell
0 1 * * 1 /usr/local/bin/wayback_archiver https://tommi.space/pages-to-archive --crawl --limit=100 --verbose --log=$HOME/wayback_archiver.log && echo "\n$(date) wayback_archiver success!" >> $HOME/wayback_archiver.log
```

<div class='red box'>
	<a href='https://github.com/buren/wayback_archiver/issues/46' target='_blank' title='The issue I opened for this script not working'>I spent too much time</a> trying to make this script work on [[Server|Xplosion Server]] with [[YunoHost]]. Hence, I am not using this Cron Job anymore, but <a href='https://github.com/marketplace/actions/wayback-machine' target='_blank' title='“Wayback Machine„ GitHub Action'>this GitHub Action</a> instead
</div>

[crontab]: https://man.cx/crontab 'crontab’s man page'