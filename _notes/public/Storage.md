---
date: 2020-12-24
updated: 2021-04-02T19:41:20.871577+02:00
tags: geek
aliases: "Backup"
redirect_from: ["/backup", "/backups"]
description: 'Traumatic data loss experiences and backup solutions testing'
---
## Data loss

Firstly, a premise on my troubled experience with storage, hard drives and data management.

I messed up several times in handling my few (three) nevertheless too many hard disks. <u>I lost all of my data two times</u>.

The first time it happened it was summer 2015 and I was at [Giffoni Film Festival](/stuff#giffoni-film-festival "Giffoni Film Festival"); I was importing on my MacBook some pictures I just shot with my camera. After completing the import, I needed to free the SD card where the images were, and I mindlessly formatted it from MacOS's [Disk Utility](https://en.wikipedia.org/wiki/Disk_Utility "“Disk Utility” on Wikipedia") without remembering I had my hard disk plugged, too. What I did was <u>resetting the hard disk instead of the SD Card</u>. Luckily, without overwriting anything, restoring data from a formatted device is not too complicated, and <u>I managed to recover most of what I had</u> on that memory device.

I gotta admit that my first data loss <u>did not teach me anything</u> about care and meticolousness in handling external hard drives, especially when there's only one single copy of your data.

Sure enough, it happened again.\
In 2018 I was in a hurry and I had to quickly go from my bedroom to the living room to connect through LAN my MacBook and send some images ASAP. Those pictures were on an hard disk which while I was running from one room to another fell and broke.\
As it's easy to imagine, this damage was irreparable. I was shocked, angry with myself and profoundly dejected. The only opportunity I had to somewhat recover something from that device was giving it to a data recovery company in Milan which asked me 990€ for the process. I rejected the offer, but if I could go back I would have payed. Memories have no price, and I no find myself with <u>no data whatsoever</u> about my three arguably most exciting years of my life, up to now; no pictures, no documents, no tickets of concerts I went to, no school homework; nothing.

<br>
<br>

## up to 2020

After the second data loss, I eventually learned my lesson. It's worth spending a couple hundred bucks more and a few hours to backup everything twice than risking to lose data. For my 18<sup>th</sup> birthday, one of the gifts my lovely friends made me was composed of two identical WD hard disks of 2TB of memory.

Up to the end of 2020, everything I had fitted on the two devices, which contained two identical copies of the same data, so that if for any reason one of the two broke, I still wouldn't lose anything. Even all of the 500ish GB of raw footage of [Everyone](/everyone "Everyone short movie") did not fill the 2TB.

Now (time of writing: January 2021), space is running out. I need to find a valuable alternative. I will try to solve my main issues here, publicly. In this way, I could easily receive suggestions (if any, [you may comment](#comments) below) and anyone who shares my same doubts may get in touch and discuss some solutions to address the huge problem of storage with me.

<br>
<br>

## Needs

1. **Durability**: I want to be able to effortlessly access all of my data now as 30 years from now.
1. **Reliability**: my storage system has to be <u>absolutely <strong>fail-proof</strong></u> (of course, no system is. I need to achieve the best reliability I can afford). I can't lose any of my data again.
1. **Backward compatibility**: the solution I will find has to be compatible with the current one.
1. **Affordability**: I should not spend too much on this. In the end, shooting pictures is not my job (yet).
1. **Accessibility**: if possible, I would like to be able of accessing all of my pictures (mainly) from anywhere anytime

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