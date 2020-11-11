---
description: "To keep the phone rolling smoothly, from time to time a classic data backup and factory reset of the mobile device is necessary, but it’s important not to forget what to backup before hitting the red button. This is my checklist and importing workflow."
edited: 2020-11-12
permalink: /mobile-backup-checklist
redirect_from:
  - /formatting-checklist
  - /phone-formatting-checklist
  - /mobile-formatting
  - /phone-backup-checklist
  - /phone-backup-checklist
  - /phone-backup
  - /mobile-backup
  - /adb-file-transfer
  - /android-file-transfer
toc: 0
---
- Export apps settings
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
- **Two Factor Authentication App**

<br />
<br />

## Files transfer

I use [ADB](http://developer.android.com/tools/help/adb.html) to transfer any file or folder from my Android device to my Mac, and this is how I do it.

Firstly, connect the phone to the computer.

open the terminal and move to the `platform-tools` folder (I keep in `Documents`)

```
cd Documents/platform-tools
```

Then, check if the two devices are connected correctly by running
```
./adb devices
```

navigate in the phone's directories
```
./adb shell

ls -al
```

once the path of the directories which contain the content that has to be copied on the computer has been noted, execute:
```
./adb pull /path/in/phone /destination/path/on/computer
```

And it's done. This is how simple, neat, fast, and powerful this process is.

<br />
<br />

## Photo importing workflow

- [ ] import everything in an isolated folder
- [ ] run DupeGuru (VIDEOS MANAGEMENT?)
- [ ] [run Exiftool](/Cheat-Sheets#ExifTool)
