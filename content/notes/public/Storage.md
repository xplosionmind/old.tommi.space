---
date: 2020-12-24T01:00:00+01:00
updated: 2021-12-17T10:55:48+01:00
tags: geek
aliases: Backup
redirect_from: [/backup/, /backups/]
description: Notes concerning storage management, viable solutions and systems tsting
---
To better understand my positions about this topic and their reasons, it would be useful to read my experience with [[Data loss|data loss]].

<br>
<br>

## Needs

1. **Durability**: I want to be able to effortlessly access all of my data now as 30 years from now.
1. **Reliability**: my storage system has to be <u>absolutely <strong>fail-proof</strong></u> (of course, no system is. I need to achieve the best reliability I can afford). [[Data loss|I cannot lose any of my data again]].
1. **Scalability**: the amount of pictures collected and stored by everyone in the world is [growing at a tremendously fast pace](https://piwigo.com/blog/2020/12/04/flickr-google-photos-the-end-of-free-photo-hosting/ 'Flickr, Google Photos… The end of free photo hosting?'), my pictures are no exception. I would prefer not to end up stuck in a resources consuming framework which is great with 2TB of pictures, but makes 10TB of pictures unmanageable.
1. **Affordability**: I should not spend too much on this. In the end, shooting pictures is not my job (yet).
1. **Accessibility**: if possible, I would like to be able to access all of my pictures from anywhere anytime.
1. **Portability**: the system I choose must be <u>as bare-bones and simple as possible</u>, so that, if in the future I want to switch to a better one, I can do it as seamlessly as possible.
2. “**Replicability**”: why should my system work for me only? It would be ideal, by documenting everything, to make my final solution “replicable”, hence available to anyone as a source of inspiration. I am writing these words for this reason.

<br>
<br>

## Doubts

- Can I rely on [[Flickr to Piwigo]] alone to host all of my JPGs, even my private ones? *No*
	- is it reliable? How much do I risk of losing my data? *Not too much. Not more reliable than any server around the world*.
	- is it secure? Are my private pictures somehow server-side encrypted? *[**No encryption**](https://piwigo.org/forum/viewtopic.php?id=31166 'How much can I trust Piwigo with my private pictures?'). Not the best option to backup pictures*
- Does it make sense to use my [[Cubbit]]'s 4TB for long-term picture storage? *It does, as long as [[Cubbit#Feature requests|some features]] will be included*
- Should I use portable Hard Disks, as the ones I already have, or internal hard disks to plug to [[Linuxplosion]]? *None of the two, if the Cubbit solution works*

<br>
<br>

## Solution

The solution I found out to be working greatly up to now is the one described in [[Importing workflow]], which consists in setting a window of [[Cron Jobs|a few hours per week]] while [[Linuxplosion]] is available to synchronize pictures and run tasks via SSH. In this way, storage is safely and redundantly backed up at home.

[[Cubbit]] is the most promising long-term solution it lacks a crucial feature: it is <u>not optimized for pictures</u> (yet): albums and photo galleries are limited to folders and sub-folders, there is not even any support for tags.

<br>
<br>

## Resources

- This [lecture on *Backups*](https://missing.csail.mit.edu/2019/backups/ 'Backups - Missing Semester'), from MIT’s [Missing Semester](https://missing.csail.mit.edu/ 'The Missing Semester') is useful to understand the reasoning behind safe backups. Note that what *The Missing Semester* evolves around is code, hence small if not tiny plain text files, while our interest is in huge amounts of data, such as high quality videos and images.
- [<cite>An engineer’s guide to cloud capacity planning</cite>](https://increment.com/cloud/an-engineers-guide-to-cloud-capacity-planning/ 'An engineer’s guide to cloud capacity planning')

<br>
<br>

## RAID

On [[Linuxplosion]], I am considering to configure a [RAID 1](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_1 '“RAID Levels” on Wikipedia') storage system. Below, some notes about this.

- [💽 How to Setup Software RAID with MDADM Comand on Linux Ubuntu in 2021 💾](https://youtu.be/O3Iq9hx8V7U '💽 How to Setup Software RAID with MDADM Comand on Linux Ubuntu in 2021 💾'), a YouTube video of September 2020
- [Ubuntu 20.04 Mdadm Setup Guide](https://youtu.be/F4YIxh1kkhI 'Ubuntu 20.04 Mdadm Setup Guide') a YouTube video

<br>
<br>

![[Backup checklist]]