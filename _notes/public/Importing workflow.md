---
date: 2020-12-23
updated: 2021-04-02
tags: geek
description: "How to import and manage pictures and videos in the most seamless way possible"
aliases: ["Photo importing workflow"]
permalink: /import
redirect_from: ["/photo-import", "/photos-import", "/import-photo", "/import-photos", "/photos-importing", "/importing-photos", "/photo-importing-workflow", "/photo-importing-workflow", "/media-importing", "/media-import", "/media-importing-workflow", "/import-workflow", "/importing-workflow"]
---
Let’s be honest: importing and managing personal media without relying on bug tech software is a stressful, itchy, and exhausting process. I am constantly trying to make it as simple, quick, and reliable as possible. Below I noted some some of my experiments and the steps I currently follow.

<br>
<br>

## Mobile

To save pictures from [[iOS Apps|my iPhone]] to [[Linuxplosion]] I use [[PhotoSync]]. Here are the key steps I performed to set everything up:

1. [make a desktop computer remotely reachable via SSH](https://dev.to/zduey/how-to-set-up-an-ssh-server-on-a-home-computer "How to Set up an SSH Server on a Home Computer - DEV")
1. Importing pictures automatically [via SFTP](https://www.photosync-app.com/support/basics/answers/how-to-transfer-to-a-linux-device.html "How to transfer to a Linux device? - PhotoSync")
1. I configured PhotoSync so that directories based on date are automatically created.
1. I set a weekly reminder to make me start the import when Linuxplosion [[Linuxplosion#Schedule|is scheduled to be on]]

<br>
<br>

## Old

Before discovering [[PhotoSync]], I worked like this:

1. import everything in an isolated folder
1. run [DupeGuru](https://dupeguru.voltaicideas.net "DupeGuru official website") (VIDEOS MANAGEMENT?)
1. run [[Exiftool]]