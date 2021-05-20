---
date: 2020-05-07
updated: 2021-04-15T16:15:29.756906+02:00
tags: geek
aliases: ["Cheat Sheet"]
description: "I use tech devices a lot, maybe too much, but I do not dive in too technically. The few times I have to get things done with more technical tools, I need some reference."
redirect_from: ["/cheatsheet", "/cheatsheets", "/cheat-sheet"]
---
![[Hotkeys]]

## Terminal

Useful [terminal](https://en.wikipedia.org/wiki/Terminal "Terminal on Wikipedia") commands

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

A quick for loop
```sh
for f in *.txt; do pandoc "$f" -s -o "${f%.txt}.rtf"; done
```

watch <cite>Star Wars - A New Hope</cite> in ASCII (not a joke)
```sh
nc towel.blinkenlights.nl 23
```

Disk space usage
```sh
du
```

<br>

### Resources

- [awesome-macos-command-line](https://github.com/herrbischoff/awesome-macos-command-line), a GitHub repository by [Marcel Bischoff](https://herrbischoff.com/)
- [Commandlinefu best commands](https://www.commandlinefu.com/commands/browse/sort-by-votes "Commandlinefu best commands"), a record of little great command line tips
- [Handy Bash Shell Aliases For Linux](https://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html "30 Handy Bash Shell Aliases For Linux")
- [Shell commands for simple tasks of processing CSV file](https://dev.to/0xbf/shell-commands-for-simple-tasks-of-processing-csv-files-linux-tips-48ea "Shell commands for simple tasks of processing CSV file")
- [`chmod` guide](https://chmodcommand.com "Chmodcommand")
- A complete dive in the Terminal language, Bash, by visiting [[Bash]]

<br>
<br>

## GPG

GnuPG Cheat Sheets:

<script src="https://gist.github.com/turingbirds/3df43f1920a98010667a.js"></script>

- [GnuPG CheatSheet](https://devhints.io/gnupg "GnuPG Cheat Sheet") on [devhints.io](https://devhints.io/ "devhints")
- [GPG Cheat Sheet](http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/ "GPG Cheat Sheet")

<br>
<br>

## `sd`

[`sd`](https://github.com/chmln/sd "sd source code") is a wonderful command-line tool to find and replace sub-strings in files. Its original version is `sed`, which comes by default in shell.

Replace `foo` with `bar` in all files inside pwd:
```sh
sd "foo" "bar" ./*
```

<br>
<br>

## HTML proofer

[HTML proofer](https://github.com/gjtorikian/html-proofer "HTML proofer GitHub repository") is a Ruby script to check HTML quality of a local folder. It can both be used as a library and as [a command line tool](https://github.com/gjtorikian/html-proofer#using-on-the-command-line "Using HTML Proofer in the command line").

basic check of a Jekyll website
```sh
bundle exec htmlproofer --assume-extension --allow_hash_href --check_favicon --check_opengraph --check_html --check_img_http --http_status_ignore 429 --url_ignore '#!' --checks_to_ignore '#!' --report_eof_tags --report_invalid_tags --report_mismatched_tags --report_missing_names --report_script_embeds /Users/tommi/tommi.space/\_site # --report_missing_doctype
```

See [HTML Proofer \> Configuration](https://github.com/gjtorikian/html-proofer#configuration "HTML Proofer Configuration") for the complete parameters list.

<br>
<br>

## Linux

![[Linuxplosion#Cheat Sheet]]

<br>
<br>

## Vim

![[Vim#Cheat Sheet]]

<br>
<br>

## Pandoc

![[Pandoc#Cheat sheet]]

<br>
<br>

## Exiftool

![[Exiftool#Cheat Sheet]]

<br>
<br>

## FFMPEG

![[FFMPEG#Cheat Sheet]]

## git

![[git#Cheat sheet]]

<br>
<br>

![[Server Setup#Nextcloud Cheat Sheet]]

<br>
<br>

## Docker

<br>

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