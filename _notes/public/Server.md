---
date: 2020-03-21
updated: 2021-01-12
tags: geek
---
My server is a surprisingly powerful (considered how much I pay for it) <abbr title="Virtual Private Server">VPS</abbr> hosted in Germany by [Contabo](https://contabo.com "Contabo official website"). It runs [Ubuntu 20.04](https://releases.ubuntu.com/20.04/ "Ubuntu 20.04 release page").

<div class="box">
	In [[Server setup]] there are step-by-step walkthroughs of my server setup and configuration.
</div>

<br>

## Improvements and fixes

### Nextcloud

- [Unlock locked files](https://central.owncloud.org/t/file-is-locked-how-to-unlock/985)
	- <https://docs.nextcloud.com/server/19/admin_manual/configuration_files/files_locking_transactional.html>
	- <https://help.nextcloud.com/t/how-to-resolve-server-replied-423-locked-to-put-https/96222>
	- <https://help.nextcloud.com/t/solved-server-replied-locked-cant-sync-nextcloud-folders-webdav-error/35514/3>
- Make Server from `AJAX` to `Cron`
- [add Memcache to Nextcloud](https://docs.nextcloud.com/server/19/admin_manual/configuration_server/caching_configuration.html)

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
- [PolitePol](https://github.com/taroved/pol), transform any webpage in a RSS feed - ✅ 2020.01.01
	- it doesn't work on Twitter or Instagram
	- I can't set up a reverse DNS, therefore the current address for the service is <http://167.86.82.148:8088>. Feel free to use it!
	
<br>
<br>

## Mail server

- Mail-in-a-box [hardware specs requirements](https://discourse.mailinabox.email/t/minimal-server-performance/6997)
- A [Reddit post](https://www.reddit.com/r/selfhosted/comments/6h88qf/on_selfhosted_mail_servers/)
- A [Meduim post](https://medium.com/@stoyanov.veseline/self-hosting-a-mail-server-in-2019-6d29542dadd4)

### options

- [A script](https://github.com/LukeSmithxyz/emailwiz "emailwiz repository on GitHub") by Luke Smith
- [Mail-in-a-Box](https://mailinabox.email "Mailinabox official website") (requires a fresh server completely devoted to it)
- [Mailcow](https://mailcow.email/ "Mailcow official website")

<br>
<br>

## Wishlist

Useful server apps or services I haven’t installed yet, in order of urgency and importance.

1. [RSS bridge](https://github.com/RSS-Bridge/rss-bridge "RSS Bridge on GitHub"), apparently, a more common, effective and popular alternative to PolitePol
1. [Firefly III](https://www.firefly-iii.org "Firefly III"), a personal finance management tool
4. [Mailtrain](https://mailtrain.org) or, alternatively, [listmonk](https://listmonk.app), newsletter managers
5. [Mail server](#mail-server)
7. ~~[Feedbin](https://feedbin.com "Feedbin official website"), arguably, the best RSS reader ou there~~. I wrote an email to them and they offered me a student free account, hosted by them.
8. [Fediverse](https://fediverse.network/) platforms
10. [Huginn](https://github.com/huginn/huginn "Huginn repository on GitHub"), an IFTTT Alternative

<br>
<br>

## General knowledge

- [Apache for beginners](https://www.wired.com/2010/02/Apache_for_Beginners/ "Apache for Beginners on WIRED")
- [Be Your Own Open ID Provider](https://www.wired.com/2010/02/Be_Your_Own_OpenID_Provider/ "Be Your Own Open ID Provider - WIRED")

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