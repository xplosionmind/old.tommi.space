---
date: 2020-05-07T02:00:00+02:00
updated: 2022-03-14T15:01:26+01:00
tags: geek
aliases: Cheat Sheet, cmd, CLI, Command Line, Terminal
description:
  I use tech devices a lot, maybe too much, but I do not dive in too technically. The few times I have to get things done with more technical tools, I need some reference.
redirect_from: [/cheatsheet/,/cheatsheets/,/cheat-sheet/,/terminal/,/cli/]
image: https://tommi.space/terminal.png
---
![[Hotkeys]]

## Terminal

Useful [terminal](https://en.wikipedia.org/wiki/Terminal 'Terminal on Wikipedia') commands

change screenshot format
```shellsession
defaults write com.apple.screencapture type jpg
killall SystemUIServer
```

build a Jekyll website and deploy it
```shell
#!/bin/bash

JEKYLL_ENV=production bundle exec jekyll build
rsync -avr --rsh='ssh' --delete-after --delete-excluded _site/ username@IP.Add.re.ss:~/notes/_site
```

note: `-avr` could be `-avz` instead

Compress a file or a folder
```shellsession
zip -r -X archive-name.zip folder-to-compress
```

prevent sleep
```shellsession
caffeinate -i -t 3600
```

Change update interval
```shellsession
defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1
```

A quick for loop
```shellsession
for f in *.txt; do pandoc '$f' -s -o '${f%.txt}.rtf'; done
```

watch <cite><a href='https://en.wikipedia.org/wiki/Star_Wars_(film)' target='_blank' title='“Star Wars” on Wikipedia'>Star Wars - A New Hope</a></cite> in ASCII (not a joke)
```shellsession
nc towel.blinkenlights.nl 23
```

Erase disk
```shellsession
sudo diskutil eraseDisk /dev/disk2 
```

Disk space usage
```shellsession
du # dust
```

With `say`, convert a text file to an audio file with Apple’s TTS engine:
```shellsession
say -v Alex -f file.txt -o "output.m4a"
```

- `-v` allows you to select the kind of voice for the output

[recursively count files in a directory](https://stackoverflow.com/a/9157162 'Recursively counting files in a Linux directory')
```shellsession
find . -type f | wc -l
```

[Take a screenshot](https://www.take-a-screenshot.org/ 'ᐅ How to take a screenshot'):
```shellsession
man screencapture
```

[Subliminal](https://subliminal.readthedocs.io/en/latest/user/cli.html 'Subliminal documentation')
```shellsession
subliminal --opensubtitles xplosionmind 'z#5Br1&9b7niM~QZ$2hJTkn2gQRReJWy4i8zwuF6Pc1wXA#fVIcykUjb' download -l en La.Casa.de.Papel.S05E10.1080p.WEB-DL.DUAL.5.1.mkv
```

Downgrade package with [Homebrew](https://brew.sh 'Homebrew')
```shellsession
# remove current version
brew uninstall navi

# find formula/bottle
# launches url
brew info --github navi

# from github url
# 1. locate version 
# 2. click 'History'
# 3. locate for the version from @BrewTestBot
# 4. click 'Commit' > 'View File' > Raw
# 5. fetch using `cURL`
curl -O https://raw.githubusercontent.com/Homebrew/homebrew-core/7c7f18795fac61747fe383d7c22ec183d5283362/Formula/navi.rb

# install older version
brew install navi.rb && rm navi.rb

# optional, pin until fix is known
brew pin navi
```

<br>

### Resources

- [The art of command line](https://github.com/jlevy/the-art-of-command-line 'the-art-of-command-line on GitHub'), a repository to master command-line usage
- [awesome-macos-command-line](https://github.com/herrbischoff/awesome-macos-command-line), a GitHub repository by [Marcel Bischoff](https://herrbischoff.com/)
- [Commandlinefu best commands](https://www.commandlinefu.com/commands/browse/sort-by-votes 'Commandlinefu best commands'), a record of little great command line tips
- [Handy Bash Shell Aliases For Linux](https://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html '30 Handy Bash Shell Aliases For Linux')
- [Shell commands for simple tasks of processing CSV file](https://dev.to/0xbf/shell-commands-for-simple-tasks-of-processing-csv-files-linux-tips-48ea 'Shell commands for simple tasks of processing CSV file')
- [`chmod` guide](https://chmodcommand.com 'Chmodcommand')
- [Linux command line](https://github.com/learnbyexample/Linux_command_line 'linux-command-line on GitHub')
- A complete dive in the Terminal language, [[Bash]]

<br>
<br>

## GPG

GnuPG Cheat Sheets:

<script src='https://gist.github.com/turingbirds/3df43f1920a98010667a.js'></script>

- [GnuPG CheatSheet](https://devhints.io/gnupg 'GnuPG Cheat Sheet') on [devhints.io](https://devhints.io/ 'devhints')
- [GPG Cheat Sheet](http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/ 'GPG Cheat Sheet')

<br>
<br>

## `sd`

[`sd`](https://github.com/chmln/sd 'sd source code') is a wonderful command-line tool to find and replace sub-strings in files. Its original version is `sed`, which comes by default in shell.

Replace `foo` with `bar` in all files inside pwd:
```shellsession
sd 'foo' 'bar' ./*
```

<br>
<br>

## HTML proofer

[HTML proofer](https://github.com/gjtorikian/html-proofer 'HTML proofer GitHub repository') is a Ruby script to check HTML quality of a local folder. It can both be used as a library and as [a command line tool](https://github.com/gjtorikian/html-proofer#using-on-the-command-line 'Using HTML Proofer in the command line').

basic check of a Jekyll website
```shellsession
bundle exec htmlproofer --assume-extension --allow_hash_href --check_favicon --check_opengraph --check_html --check_img_http --http_status_ignore 429 --url_ignore '#!' --checks_to_ignore '#!' --report_eof_tags --report_invalid_tags --report_mismatched_tags --report_missing_names --report_script_embeds /Users/tommi/tommi.space/\_site # --report_missing_doctype
```

See [HTML Proofer \> Configuration](https://github.com/gjtorikian/html-proofer#configuration 'HTML Proofer Configuration') for the complete parameters list.

<br>
<br>

## Linux

![[Linuxplosion#Cheat sheet]]

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

<br>
<br>

## git

![[git#Cheat sheet]]

<br>
<br>

## Nextcloud manteinance

![[Server Setup#Nextcloud Cheat Sheet]]
