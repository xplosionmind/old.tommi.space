---
date: 2020-05-07
updated: 2021-01-26T11:02:25.635756+01:00
tags: geek
aliases: ["Cheat Sheet"]
description: "I use tech devices a lot, maybe too much, but I don’t dive in too technically. The few times I have to get things done with more technical tools, I need some reference."
redirect_from: ["/cheatsheet", "/cheatsheets", "/cheat-sheet"]
---
## Hotkeys

[[Hotkeys]]

## CLI

Useful [terminal](https://www.wikiwand.com/en/Terminal "Terminal on Wikipedia") commands

change screenshot format
```sh
defaults write com.apple.screencapture type jpg
killall SystemUIServer
```

build a Jekyll website and deploy it
```sh
#!/bin/bash

JEKYLL_ENV=production bundle exec jekyll build
rsync -avr --rsh='ssh' --delete-after --delete-excluded _site/ username@IP.Add.re.ss:~/notes/_site
```

note: `-avr` could be `-avz` instead

Compress a file or a folder
```sh
zip -r -X archive-name.zip folder-to-compress
```

prevent sleep
```sh
caffeinate -i -t 3600
```

Change update interval
```sh
defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1
```

<br>

### `sd`

[`sd`](https://github.com/chmln/sd "sd source code") is a wonderful command-line tool to find and replace sub-strings in files. Its original version is `sed`, which comes by default in shell.

Replace `foo` with `bar` in all files inside pwd:
```sh
sd "foo" "bar" ./*
```

<br>

### HTML proofer

[HTML proofer](https://github.com/gjtorikian/html-proofer "HTML proofer GitHub repository") is a Ruby script to check HTML quality of a local folder. It can both be used as a library and as [a command line tool](https://github.com/gjtorikian/html-proofer#using-on-the-command-line "Using HTML Proofer in the command line").

basic check of a Jekyll website
```sh
bundle exec htmlproofer --assume-extension --allow_hash_href --check_favicon --check_opengraph --check_html --check_img_http --http_status_ignore 429 --url_ignore '#!' --checks_to_ignore '#!' --report_eof_tags --report_invalid_tags --report_mismatched_tags --report_missing_names --report_script_embeds /Users/xplosionmind/tommi.space/\_site # --report_missing_doctype
```

See [HTML Proofer \> Configuration](https://github.com/gjtorikian/html-proofer#configuration "HTML Proofer Configuration") for the complete parameters list.

<br>

### Resources

- [awesome-macos-command-line](https://github.com/herrbischoff/awesome-macos-command-line), a GitHub repository by [Marcel Bischoff](https://herrbischoff.com/)

<br>

***

<br>

## Pandoc

Useful links:
- [format options](https://pandoc.org/MANUAL.html#option--from "“--from” in Pandoc manual")

<br>

Convert a Word file into a Markdown file, following the [CommonMark](https://commonmark.org/ "CommonMark official website") standard
```
pandoc input.docx -f docx -t commonmark -o ~/Desktop/output.md
```

Convert multiple Word files in a folder in a standalone Markdown file
```
pandoc *.docx -f docx -t commonmark -s -o ~/Desktop/output.md
```

<div class="box">
	Replace <code>commonmark</code> with <code>markdown_mmd</code> to have more features
</div>

<br>

***

<br>

## ExifTool

Scripts for the awesome [ExifTool](https://exiftool.org/). I use them as part of my [[Photo importing workflow]]

<div class="yellow box">
	For all of the following commands, <u><abbr title="present working directory">pwd</abbr> must correspond to the folder containing the pictures to be scanned</u>.
</div>

### Show metadata

```sh
exiftool -s -G
```

<br>

```sh
exiftool "=-all"
```

<div class="blue box">
	<strong><code>-s</code></strong> is used to show the names in ExifTool commands format. <i>e.g.: instead of "Create Date" you see "CreateDate"</i>
	<br />
	<strong><code>-G</code></strong> is used to show the metadata Group to which the metadata tag belongs.
</div>

<br>

### File renaming

Rename files based on their date and time data.

<div class="blue box">
Images shot at the same moment (photo bursts, for example) are being sorted with increasing single-digit indexes.
</div>
	
<div class="yellow box">
Since there are many parameters which <u>might contain conflicting times</u>, there are several different tags which can be analyzed. I sorted them such that the first ones are the ones which are more likely to be found but probably not exact, while the last ones are very precise tags, but less likely to be found in an image metadata.
</div>

```sh
exiftool '-FileName<FileModifyDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<DateTimeCreated' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<CreateDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<DateTimeOriginal' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
exiftool '-FileName<GPSDateTime' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r ./*
```

<div class="blue box">
	<b><code>-r</code></b> makes the analysis <i>recursive</i>: subfolders are scanned, too.
</div>

<br />

### Directories

Organize files in directories based on each image’s dimensions (resolution)

<div class="yellow box">
	<strong>NOTE</strong>: newly created directories are created in pwd
</div>

```sh
"-Directory<imagesize" ./*
```

<br>

Move files to folders based on year and month

```sh
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

### Resources

Commands above are a personal adaptation of the ones I found from the following sources:
- [ExifTool Commands for Image Organization](https://ninedegreesbelow.com/photography/exiftool-commands.html), by [9° Below](https://ninedegreesbelow.com)
- [exiftool Application Documentation](https://exiftool.org/exiftool_pod.html)

<br>

***

<br>

## git

- [Dangit, Git!?!](https://dangitgit.com/)

<br>
<br>

## Nextcloud
### Manually install applications

move to the Nextcloud apps folder
```
cd /var/www/nextcloud/apps
```

download the application package from [Nextcloud apps website](https://apps.nextcloud.com/ "Nextcloud Apps")
```
wget https://github.com/nextcloud/documentserver_community/releases/download/v0.1.5/documentserver_community.tar.gz # url to the package
```

extract it (by substituting `package_name` with the name of the app package)
```
tar -xvzf package_name.tar.gz
```

remove compressed package
```
rm -rf package_name.tar.gz
```

change permissions for the app’s directory
```
chown -R www-data:www-data /var/www/nextcloud/apps/app_name
chmod -R 755 /var/www/nextcloud/apps/app-name
```

<br>

### Maintenance mode

enable maintenance mode
```sh
sudo -u www-data php /var/www/cloud.tommi.space/public_html/occ maintenance:mode --on
```

disable maintenance mode
```sh
sudo -u www-data php /var/www/cloud.tommi.space/public_html/occ maintenance:mode --off
```

<br>

***

<br>

## Docker

### Notes

- Every docker container has an IP assigned by default
- by default, docker doesn't assign a terminal to a container when it's run
- Docker has a built-in DNS serves that allows containers to resolve each other
	- DNS server runs at `127.0.0.11`

<br>

to list all running containers

```sh
docker ps
```

to list running and non-running containers

```sh
docker ps -a
```

to list all the details about a container

```sh
docker inspect some-container
```

to see all the logs of a container running in a background

```sh
docker logs some-container
```

<br>

### Run

```
docker run some-image
```

- add `-d` to
- add `-it` to run an image in an interactive way
	- add `-i` to check for input
	- add `-t` to prompt on terminal
- `-p 80:5000` port-where-user-access:port-of-docker-container
- to store data in an external directory `docker run -v /opt/daradir:/var/lib/some-app some-app`
- `-e ENVIRONMENT_VARIABLE=VARIABLE some-app` to change an environment variable

<br>

### Networks

To find which network you're in, use the `inspect` command

<br>

**`bridge`**:

private and internal network

<br>

**`none`**:

no attachment to any network

```
docker run some-app --network=none
```

<br>

**`host`**:

to access from the web

```
docker run some-app --network=host
```

<br>
<br>

### Storage

Docker files are in `/var/lib/docker`

<br>

### Questions

- how can I know the Docker Host IP address?