---
date: 2021-07-18T15:04:47+02:00
updated: 2022-03-14T14:58:44+01:00
tags:
  - geek/idea
  - help
toc: false
---
The core idea behind this software is really simple: creating, managing and keeping synchronized hard links of all the files in specific directories.

Since directories only support weak links, this program should be able to handle all of the files in one or more chosen directories in order to avoid occupying space on a disk.

<br>
<br>

## Inspiration

- [hardlinks-osx](https://github.com/selkhateeb/hardlink 'hardlink on GitHub') is exactly what I am looking for, but it is not supported for the new Apple filesystem; when I attempt to install it using Homebrew I get: <q><code>Error: hardlink-osx has been disabled because it doesn't work under APFS, using on HFS+ can cause data loss after conversion!</code></q>
- [mackup](https://github.com/lra/mackup/ 'Keep your application settings in sync') wonderfully does the job described above, but for configuration files only.
