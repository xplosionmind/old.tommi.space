---
date: 2020-03-21
updated: 2021-02-08T12:44:39.251695+01:00
tags: geek geek/server
main: true
---
My server is a surprisingly powerful (considered how much I pay for it) <abbr title="Virtual Private Server">VPS</abbr> hosted in Germany by [Contabo](https://contabo.com "Contabo official website"). It runs [Ubuntu 20.04](https://releases.ubuntu.com/20.04/ "Ubuntu 20.04 release page").

<div class="box">
	In [[Server setup]] there are step-by-step walkthroughs of my server setup and configuration.
</div>

<br>

## Improvements and fixes

- Install Jitsi Meet from Docker

### Nextcloud

- Make Server from `AJAX` to `Cron`
- Add OnlyOffice support

<br>
<br>

## Installed

- [Nextcloud](https://nextcloud.com "Nextcloud official website")
	- [[Server setup#Nextcloud configuration|configuration and installation walk-through]]
	- [[Server setup#Nextcloud cheatsheet|Nextcloud cheatsheet]]
- [Jitsi Meet](https://jitsi.org "Jitsi Meet official website")
	- [[Server setup#Install Jitsi Meet|Jitsi Meet configuration and installation walk-through]]
- [OpenVPN](https://openvpn.net "OpenVPN official website") - ✅ 2020.01.01
	- to install it, I followed this super simple and quick [guide](https://dev.to/phiilu/host-your-own-openvpn-server-in-a-few-seconds-73l "Host Your own OpenVPN Server in a few seconds - DEV")
- ~~[PolitePol](https://github.com/taroved/pol), transform any webpage in a RSS feed - ✅ 2020.01.01~~.
	- it doesn't work on Twitter or Instagram
	- **It's stupid**: [RSS bridge](https://github.com/RSS-Bridge/rss-bridge "RSS Bridge on GitHub") is much more stable, cool, and effective.
	- **uninstalled**
1. [RSS bridge](https://github.com/RSS-Bridge/rss-bridge "RSS Bridge on GitHub"), apparently, a more common, effective and popular alternative to PolitePol. It's now running at <http://167.86.82.148:3001> ✅ 2021.01.24, [[Server setup#RSS-Bridge|setup]]

<br>
<br>

## Mail server

- Mail-in-a-box [hardware specs requirements](https://discourse.mailinabox.email/t/minimal-server-performance/6997)
- A [Reddit post](https://www.reddit.com/r/selfhosted/comments/6h88qf/on_selfhosted_mail_servers/)
- A [Meduim post](https://medium.com/@stoyanov.veseline/self-hosting-a-mail-server-in-2019-6d29542dadd4)

### options

- [A script](https://github.com/LukeSmithxyz/emailwiz "emailwiz repository on GitHub") by Luke Smith
- [Mail-in-a-Box](https://mailinabox.email "Mailinabox official website") (requires a fresh server completely devoted to it)
- [Mailcow](https://mailcow.email/ "Mailcow official website"), simple, dockerized, feature-packed.

<br>
<br>

## Wishlist

Useful server apps or services I haven’t installed yet, in order of urgency and importance.

1. [Firefly III](https://www.firefly-iii.org "Firefly III"), a personal finance management tool
	- [Docker installation guide](https://docs.firefly-iii.org/firefly-iii/installation/docker/ "FIrefly III Docker installation guide")
1. [Mailtrain](https://github.com/Mailtrain-org/mailtrain "Mailtrain on GitHub") or, alternatively, [listmonk](https://listmonk.app), newsletter managers
2. [Huginn](https://github.com/huginn/huginn "Huginn repository on GitHub"), an IFTTT Alternative
3. [Mail server](#mail-server)
4. ~~[Feedbin](https://feedbin.com "Feedbin official website"), arguably, the best RSS reader ou there~~. I wrote an email to them and they offered me a student free account, hosted by them.

<br>
<br>

## General knowledge

- [Apache for beginners](https://web.archive.org/web/20161227005904/https://www.wired.com/2010/02/Apache_for_Beginners "Apache for Beginners on WIRED")
- [Be Your Own Open ID Provider](https://web.archive.org/web/20161227023027/https://www.wired.com/2010/02/Be_Your_Own_OpenID_Provider "Be Your Own Open ID Provider - WIRED")

<br>
<br>

## Cron Jobs

### How to configure a Cron Job

- [<q>How do I set up a Cron Job?</q>](https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job "How do I set up a Cron Job? - AskUbuntu") on AskUbuntu
- [Creating a custom Cron Job](https://help.dreamhost.com/hc/en-us/articles/215767047-Creating-a-custom-Cron-Job "Creating a custom Cron Job"), in DreamHost Knowledge Base
- More detailed information in [Ubuntu Community Help Wiky](https://help.ubuntu.com/community "Ubuntu Community Help Wik") &rarr; [CronHowto](https://help.ubuntu.com/community/CronHowto "CronHowto in Ubuntu Community Help Wiki")

In short, simply by typing: `crontab -e`

## My Cron Jobs

- [[Cron Job wayback_archiver]]

<br>
<br>

## Docker

I hate Docker. Probably, it's because I don't get it. I believe that if one day I'll finally learn how it works, my life is going to change and everything will become easier. For this reason, I'm keeping at hand useful stuff which work and integrate with it.

<br>
<br>

## DIY Home Server

- <https://youtu.be/DlQNciGVgbQ>
- <https://youtu.be/ohkMRA74MB4>
- <https://youtu.be/GeDo8mjB5oU>
- [Set Up a Home Server](https://www.wired.com/2010/02/set-up-a-home-server/ "Set Up a Home Server - WIRED")
- [Make Your Computer Into a Server in 10 Minutes](https://www.instructables.com/id/Make-Your-Computer-Into-A-Server-in-10-Minutes-fr/)

### Raspberry Pi

- [Several guides](https://pimylifeup.com/category/projects/server/ "Server - Pimpmylifeup")
- [Nextcloud Server](https://lonewolfonline.net/raspberry-pi-personal-cloud-server/ "Raspberry Pi Personal cloud server")
- [Instructables](https://www.instructables.com/id/Ultimate-Pi-Based-Home-Server/ "Ultimate Pi-Based Home Server")