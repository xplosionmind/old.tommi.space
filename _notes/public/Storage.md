---
date: 2020-12-24
updated: 2021-06-21T10:04:50.960817+02:00
tags: geek
aliases: "Backup"
redirect_from: ["/backup", "/backups"]
description: 'Notes concerning storage management, viable solutions and systems tsting'
---
To better understand my positions about this topic and their reasons, it would be useful to read my experience with [[Data loss|data loss]]

<br>
<br>

## Needs

1. **Durability**: I want to be able to effortlessly access all of my data now as 30 years from now.
1. **Reliability**: my storage system has to be <u>absolutely <strong>fail-proof</strong></u> (of course, no system is. I need to achieve the best reliability I can afford). I cannot lose any of my data again.
1. **Scalability**: the amount of pictures collected and stored by everyone in the world is growing at a tremendously fast pace, my pictures are no exception. I would prefer not to end up stuck in a resources consuming framework which is great with 2TB of pictures, but makes 10TB of pictures unmanageable.
1. **Affordability**: I should not spend too much on this. In the end, shooting pictures is not my job (yet).
1. **Accessibility**: if possible, I would like to be able of accessing all of my pictures (mainly) from anywhere anytime.
1. **Portability**: the system I choose must be as bare-bones and simple as possible, so that, if in the future I want to switch to a better one, I can do it as seamlessly as possible.
2. “**Replicability**”: why should my system work for me only? It would be ideal, by documenting everything, to make my final solution “replicable”, hence available to anyone as a source of inspiration.

<br>
<br>

## Doubts

- Can I [[Piwigo|rely on Piwigo alone]] to host all of my JPGs, even my private ones?
	- is it reliable? How much do I risk of losing my data?
	- is it secure? Are my private pictures somehow server-side encrypted?
- Does it make sense to use my [Cubbit Cell](https://cubbit.io "Cubbit")'s 4TB for long-term picture storage?
- Should I use portable Hard Disks, as the ones I already have, or internal hard disks to plug to [[Linuxplosion]]?

## Solution

The solution I found out to be working greatly up to now is the one described in [[Importing workflow]], which consists in setting a window of [[Cron Jobs|a few hours per week]] while [[Linuxplosion]] is available to synchronize pictures and run tasks via SSH. In this way, storage is safely and redundantly backed up at home.

Cubbit would have been great, but it lacks two crucial features:
- it is hardly expandable: I could easily fill up the maximum 4TB of storage in few years
- it is not optimized for pictures (yet): albums and photo galleries are limited to folders and sub-folders, there is not even any support for tags.

<br>
<br>

## Resources

- This [lecture on *Backups*](https://missing.csail.mit.edu/2019/backups/ "Backups - Missing Semester"), from MIT’s [Missing Semester](https://missing.csail.mit.edu/ "The Missing Semester") is useful to understand the reasoning behind safe backups. Note that what *The Missing Semester* evolves around is code, hence small if not tiny plain text files, while our interest is in huge amounts of data, such as high quality videos and images.
- [<cite>An engineer’s guide to cloud capacity planning</cite>](https://increment.com/cloud/an-engineers-guide-to-cloud-capacity-planning/ "An engineer’s guide to cloud capacity planning")

<br>
<br>

## RAID

I decided that I will go for a [RAID 1](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_1 "“RAID Levels” on Wikipedia") storage configuration locally on [[Linuxplosion]]. Below, some notes about this.

- [💽 How to Setup Software RAID with MDADM Comand on Linux Ubuntu in 2021 💾](https://youtu.be/O3Iq9hx8V7U "💽 How to Setup Software RAID with MDADM Comand on Linux Ubuntu in 2021 💾"), a YouTube video of September 2020
- [Ubuntu 20.04 Mdadm Setup Guide](https://youtu.be/F4YIxh1kkhI "Ubuntu 20.04 Mdadm Setup Guide") a YouTube video

<br>
<br>

![[Backup checklist]]