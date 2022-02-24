---
date: 2021-03-29T05:44:07+02:00
updated: 2022-02-24T10:51:30+01:00
tags: geek/apps
---
## Cheat Sheet

Scripts for the awesome [ExifTool](https://exiftool.org/ "ExifTool"). I use them as part of my [[Importing workflow]]

<div class="yellow box">
	For all of the following commands, <u><abbr title="present working directory">pwd</abbr> must correspond to the folder containing the pictures to be scanned</u>.
</div>

### Show metadata

```shellsession
exiftool -s -G
```

<div class="blue box">
	<strong><code>-s</code></strong> is used to show the names in ExifTool commands format. <i>e.g.: instead of "Create Date" you see "CreateDate"</i>
	<br>
	<strong><code>-G</code></strong> is used to show the metadata Group to which the metadata tag belongs.
</div>

<br>

### Strip metadata

```shellsession
exiftool "=-all"
```

<br>

### File renaming

Rename files based on their date and time data.

<div class="blue box">
Images shot at the same moment (photo bursts, for example) are being sorted with increasing single-digit indexes.
</div>
	
<div class="yellow box">
Since there are many parameters which <u>might contain conflicting times</u>, there are several different tags which can be analyzed. I sorted them such that the first ones are the ones which are more likely to be found but probably not exact, while the last ones are very precise tags, but less likely to be found in an image metadata see <a href="https://exiftool.org/forum/index.php?topic=12325.0"  target="_blank" title="">this post</a> on the <a href="https://exiftool.org/forum/"  target="_blank" title="ExifTool Forum">ExifTool forum</a>.
</div>

```shellsession
exiftool '-FileName<FileModifyDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<DateTimeCreated' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<DateTimeOriginal' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<CreateDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
```

<div class="blue box">
	<b><code>-r</code></b> makes the analysis <i>recursive</i>: subfolders are scanned, too.
</div>

<br>

### Directories

Organize files in directories based on each image’s dimensions (resolution)

<div class="yellow box">
	<strong>NOTE</strong>: newly created directories are created in pwd
</div>

```shellsession
"-Directory<imagesize" ./*
```

<br>

Move files to folders based on year and month

```shellsession
exiftool '-Directory<FileModifyDate' -d ./%Y/%Y.%m -r ./*
exiftool '-Directory<DateTimeCreated' -d ./%Y/%Y.%m -r ./*
exiftool '-Directory<CreateDate' -d ./%Y/%Y.%m -r ./*
exiftool '-Directory<DateTimeOriginal' -d ./%Y/%Y.%m -r ./*
exiftool '-Directory<GPSDateTime' -d ./%Y/%Y.%m -r ./*
```

<div class="blue box">
	add <b><code>-o</code></b> after <code>exiftool</code> to copy each image instead of moving it.
</div>

<br>
<br>

## Resources

Commands above are a personal adaptation of the ones I found from the following sources:
- [ExifTool Commands for Image Organization](https://ninedegreesbelow.com/photography/exiftool-commands.html "ExifTool commands - 9° Below"), by [9° Below](https://ninedegreesbelow.com "Nine Degrees Below")
- [exiftool Application Documentation](https://exiftool.org/exiftool_pod.html)