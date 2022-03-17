---
date: 2020-12-15T15:56:57+01:00
updated: 2022-03-14T14:53:59+01:00
tags:
  - geek/idea
  - help
description: An ideal software which collects data on what you do, analyzing and showing you a summary of time you spend
aliases: Life dashboard
redirect_from: [/life-dashboard/,/dashboard/]
---
*Nolan* is a cross-device software aimed at collecting painstakingly all of the activity done by its owner on their devices, and automatically synchronizing and analyzing everything on a server, either owned by the user or by a third party, but by zero-knowledge-encrypting all of the traffic.

Unlike currently widespread pre-installed “digital health” apps, *Nolan* does not only look at the currently opened app, but it should connect to each one and get what is being done on it. For instance, *Nolan* is not interested in knowing that I am reading the *New York Times*, *Nolan* wants to know *what* I am reading, for how long, if there is some sort of trend int the time of the day when I read the newspaper; in the same way, he does not care I am watching a video, he notes *which* video I am looking at and from where.
As a result, *Nolan* makes a huge CSV or JSON database with a **timeline** of *everything* done by the user, and parses graphs and statistics about it.

*Nolan* is some sort of a **life dashboard**: it cross-analyzes stuff you do -both online and offline- where you do it, for how long you do it, how often you do it, maybe even near whom you do it, and eventually it sums up the results serving them to you.

- subsections of this everything are put in more specific pages of the websites to add accomplishments (e.g. [[Server]], [Tutto](/tutto), [[Giri]])
- use tags to split stuff into the above mentioned subsections
- add **locations**, too! Check OSM API to integrate the system

<br>
<br>

## Automations

- Take `page.date` and `page.updated` values of the websites’ pages to automatically know the moments when they were being created/edited
- get from mobile OS stats the time spent on apps and how often they are opened.
- somehow integrate with CalDAV and add personal calendar events

<br>
<br>

## Sources and inspiration

The existing software closest to what Nolan does is [personal-management-system](https://github.com/Volmarg/personal-management-system 'personal-management-system’s source code on GitHub')
