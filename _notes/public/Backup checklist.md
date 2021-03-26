---
date: 2020-09-14
updated: 2021-03-24T08:05:29.563656+01:00
tags: geek
image: "/images/backup.jpg"
permalink: /backup
redirect_from: ["/mobile-backup-checklist", "/phone-formatting-checklist", "/mobile-formatting", "/phone-backup-checklist", "/phone-backup-checklist", "/phone-backup", "/mobile-backup", "/adb-file-transfer", "/android-file-transfer", "/macos-backup", "/formatting-checklist", "/backup-checklist"]
toc: 0
description: "To keep the phone rolling smoothly, from time to time a classic data backup and factory reset are necessary, but it’s important not to forget what to save before hitting the red button. These are my checklist and importing workflow."
---
## Laptop

- `/Library/User\ Pictures`
- Custom fonts

<br>
<br>

## Mobile

- Export apps settings
	- OSMAnd+ favorites and settings
- WiFi passwords
- WhatsApp
	- important messages
	- archived messages
	- global backup
- images
- audios
	- recordings
	- important WhatsApp audios
- Contacts (if not synced)
- Apps notification settings
- **Two Factor Authentication App**

<br>

### Transfer files

I use [ADB](http://developer.android.com/tools/help/adb.html) to transfer any file or folder from my Android device to my Mac, and this is how I do it.

Firstly, connect the phone to the computer.

Open the terminal and move to the `platform-tools` folder (I keep in `Documents`)

```sh
cd Documents/platform-tools
```

Then, check if the two devices are connected correctly by running

```sh
./adb devices
```

navigate in the phone's directories
```sh
./adb shell

ls -al
```

once the path of the directories which contain the content that has to be copied on the computer has been noted, execute:

```sh
./adb pull /path/in/phone /destination/path/on/computer
```

And it's done. This is how simple, neat, fast, and powerful this process is.

<br>

### Mobile photo importing workflow

My [[Photo importing workflow]]