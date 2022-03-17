---
date: 2020-12-23
updated: 2022-03-14T14:58:10+01:00
tags: geek
description: How to import and manage pictures and videos in the most seamless way possible
aliases: Photo importing workflow, Media importing workflow
permalink: /import/
redirect_from: [/photo-import/,/media-importing/,/media-import/,/media-importing-workflow/,/importing-workflow/]
---
Let’s be honest: importing and managing personal media without relying on big tech software is a stressful, itchy, and exhausting process. I am constantly trying to make it as simple, quick, and reliable as possible, but I am having a hard time. Below I noted some some of my experiments and the steps I currently follow.

<br>
<br>

## Basically

1. import everything in an isolated folder
1. run [DupeGuru](https://dupeguru.voltaicideas.net 'DupeGuru official website') (VIDEOS MANAGEMENT?)
1. run [[Exiftool]]

<br>
<br>

## Transferring files

### Android

The cleanest way to move files from an <u>Android to a MacOS</u> device is by using [<abbr title='Android Debug Bridge'>ADB</abbr>](http://developer.android.com/tools/help/adb.html).

1. Connect the phone to the computer;
1. Open the terminal and move to the `platform-tools` folder (I keep in `Documents`): `cd Documents/platform-tools`;
1. Check if the two devices are connected correctly by running `./adb devices`;
1. Navigate in the phone directories `./adb shell`, `ls -al`;
1. once the path of the directories which contain the content that has to be copied on the computer has been noted, execute `./adb pull /path/in/phone /destination/path/on/computer`;
6. Done. This is how simple, neat, fast, and powerful this process is.

<br>

### iOS

I still haven’t figured the best way to transfer a lot of images from iPhone to MacOS. AirDrop is wonderful, but it cannot work with all of the photos and videos in my mobile gallery.

<br>

### PhotoSync

To save pictures from my iPhone to [[Linuxplosion]] I use [[PhotoSync]]. Here are the key steps I performed to set everything up:

1. [make a desktop computer remotely reachable via SSH](https://dev.to/zduey/how-to-set-up-an-ssh-server-on-a-home-computer 'How to Set up an SSH Server on a Home Computer - DEV')
1. Importing pictures automatically [via SFTP](https://www.photosync-app.com/support/basics/answers/how-to-transfer-to-a-linux-device.html 'How to transfer to a Linux device? - PhotoSync')
1. I configured PhotoSync so that directories based on date are automatically created.
1. I set a weekly reminder to make me start the import when Linuxplosion [[Linuxplosion#Schedule|is scheduled to be on]]