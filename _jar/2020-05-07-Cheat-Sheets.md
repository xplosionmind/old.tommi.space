---
categories: Geek
edited: 2020-10-24
code: "1"
description: "I use tech devices a lot, maybe too much, but I don’t dive in too technically. The few times I have to get things done with more technical tools, I need some reference."
---
## CLI

**Terminal commands**:

change screenshot format

```
defaults write com.apple.screencapture type jpg
killall SystemUIServer
```


### Resources

- [awesome-macos-command-line](https://github.com/herrbischoff/awesome-macos-command-line), a GitHub repo by [Marcel Bischoff](https://herrbischoff.com/)

<br>
<br>

## ExifTool

Scripts for the awesome [ExifTool](https://exiftool.org/). I use them as part of my [photo importing workflow](/mobile-backup-checklist#photo-importing-workflow).

All of these scripts must be followed by the path of the image or the directory containing multiple pictures.
{:.red .box}

### Show metadata

```sh
exiftool -s -G
```

**`-s`** is used to show the names in ExifTool commands format. *e.g.: instead of "Create Date" you see "CreateDate"*
{:.blue .box}

**`-G`** is used to show the metadata Group to which the metadata tag belongs.
{:.blue .box}

<br />

### File renaming

Rename files based on their date and time data.

Images shot at the same moment (photo bursts, for example) are being sorted with increasing single-digit indexes.
{:.blue .box}
	
Since there are many parameters which **might contain conflicting times**, there are several different tags which can be analyzed. I sorted them such that the first ones are the ones which are more likely to be found but probably not exact, while the last ones are very precise tags, but less likely to be found in an image metadata.
{:.yellow .box}

```sh
exiftool '-FileName<FileModifyDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r
```

```sh
exiftool '-FileName<DateTimeCreated' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r
```

```sh
exiftool '-FileName<CreateDate' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r
```

```sh
exiftool '-FileName<DateTimeOriginal' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r
```

```sh
exiftool '-FileName<GPSDateTime' -d %Y.%m.%d\ -\ %H.%M.%S%%c.%%le -r
```

adding **`-r`** is used to make the analysis _recursive_, which means that subfolders are scanned, too.
{:.blue .box}

<br />

### Directories

Organize files in directories based on each image’s dimensions (resolution)

**NOTE**: the directories are created in the working directory
{:.yellow .box}

```sh
"-Directory<imagesize"
```

<br />

Move files to folders based on year and month

```sh
exiftool '-Directory<FileModifyDate' -d /path/to/directory/%Y/%Y.%m -r
```

```sh
exiftool '-Directory<DateTimeCreated' -d /path/to/directory/%Y/%Y.%m -r
```

```sh
exiftool '-Directory<CreateDate' -d /path/to/directory/%Y/%Y.%m -r
```

```sh
exiftool '-Directory<DateTimeOriginal' -d /path/to/directory/%Y/%Y.%m -r
```

```sh
exiftool '-Directory<GPSDateTime' -d /path/to/directory/%Y/%Y.%m -r
```

add **`-o`** after `exiftool` to copy each image instead of moving it.
{:.blue .box}

<br />

### Resources

Commands above are a personal adaptation of the ones I found from the following sources:
- [ExifTool Commands for Image Organization](https://ninedegreesbelow.com/photography/exiftool-commands.html), by [9° Below](https://ninedegreesbelow.com)
- [exiftool Application Documentation](https://exiftool.org/exiftool_pod.html)

<br />
<br />

## git

- [Dangit, Git!?!](https://dangitgit.com/)

<br />
<br />

## Docker

### Notes

- Every docker container has an IP assigned by default
- by default, docker doesn't assign a terminal to a container when it's run
- Docker has a built-in DNS serves that allows containers to resolve each other
	- DNS server runs at `127.0.0.11`

<br>

to list all running containers

```
docker ps
```

to list running and non-running containers

```
docker ps -a
```

to list all the details about a container

```
docker inspect some-container
```

to see all the logs of a container running in a background

```
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
