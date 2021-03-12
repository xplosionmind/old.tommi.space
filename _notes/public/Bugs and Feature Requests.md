---
date: 2020-08-04
updated: 2021-02-27T16:28:35.193851+01:00
tags: geek
permalink: /bugs
redirect_from: ["/feature-requests", "/bugs-and-feature-requests"]
---
The [[Apps]] I use the most are open source software in active development. Often, I notice bugs or I have ideas of possible improvements but I rarely have time to file a proper issue for every bug or a exhaustive post for a feature request. Thus, in this list I quickly note all the thoughts which pop up in my mind, hoping some day I’ll find enough time to effectively share my reports.

<br>
<br>

## iOS

Improvements and bugs of iOS which I notice while using [[iOS Apps|my iPhone]].

<br>

### Messages

- Improved audio handling
	- recording stops when screen shuts off
- Delete for me / delete for everybody option

<br>
<br>

## Signal

[Signal](https://signal.org "Signal official website") is the most secure and private messaging app in the world

- markdown syntax (or any text formatting capability)
- setting to choose to automatically download media and add to Library

<br>
<br>

## Loop habit tracker

[Loop Habit Tracker](https://loophabits.org "Loop Habit Tracker official website") is an open source app for [[Self tracking]]

- Add the capability of inserting daily numbers instead of boolean values only. (e.g. to track how many candies I ate)

<br>
<br>

## Nextcloud Notes

- Front matter recognition
- Monospaced fonts for raw Markdown only (only while editing)

<br>
<br>

## DupeGuru

- scanning also mirrored images and rotated ones

<br>
<br>

## Hypothes.is

[Hypothes.is](https://hypothes.is "Hypothes.is") is an annotation and highlighting service for web pages

- design improvement
- WebMentions and IndieWeb integration

<br>
<br>

## Obsidian

### Feature requests

- choose to hide front matter when embedding other notes, even if “show YAML front matter” is switched on for the notes
- Multiple hotkeys for one action
- In links, update also headings when their name is changes
- Tags aliases (e.g. &num;place == &num;places)

<br>

### Bugs

- in editor mode last 2 letters are hidden. (fixed by setting `.CodeMirror` `overflow: unset` in `obsidian.css`)
- cursor width not corresponding to a single character’s spacing
- wiki-like links don’t work in `div`s

<br>
<br>

## Cubbit

## Feature requests

- Using a custom domain
- WebDAV support

<br>
<br>

## Oxygen OS

[Oxygen OS](https://www.oneplus.com/it/oxygenos) is the Android flavor developed and used by [OnePlus](https://oneplus.com)

- match the lock screen and ambient display design (right now digital clocks have two different fonts and sizes)
- add the capability to customize the alert slider

<br>
<br>

## Joplin

[Joplin](http://joplinapp.org) is a wonderful and complete note-taking app.

<div class="red box">
	<strong>Note</strong>: I stopped using Joplin as my daily driver since November 2020 and I switched to <a href="https://obsidian.md" rel="noopener noreferrer" target="_blank" title="Obsidian official website">Obsidian</a>. The reasons why I did this are in <a href="/switch-to-zettelkasten" title="Switch to Zettelkasten">this blog post</a>.
</div>

### Features requests

- Export to docx/odt: pandoc integration
- Choose or edit formatting options of exported PDFs from GUI
- Syntax Highlighting on mobile
- Keyboard Shortcut for To-Do/Note conversion
- display To-Dos on top after reminder rung
- when a completed to-do has an indented point, dim it too
- remove the delete confirmation button by adding a "Trash" notebook which empties itself automatically every x days
- multiple simultaneous note editing
- **MOBILE ONLY**: when clicking on reminder's notification, go to the reminder in question
- Notebook pinning
- `<br />` shortcut
- Join the *Common Mark* standard
- don’t create the `_resources` folder when exporting a note which hasn't any attachments
- Toggle an automatic table of content creation
- Support for YAML front matter
- Implement split view: two different notes side by side

### Bugs

- `cmd + E` works only to switch external editing on, not to turn it off

<br>
<br>

## Piwigo

- ~~One thing I'm still trying to figure out is how to make more pictures appear for a gallery page. They are too few and it's really complicated to modify the size of the thumbnail to make them look nice~~. ✅ 2021.01.07 it's sufficient to go in the settings page of the user in question and change the value of “number of photos per page”
- Sharing private galleries links (see [GitHub issue](https://github.com/petitssuisses/piwigo-ShareAlbum/issues/62 "an issue in piwigo-ShareAlbum repository"))
- Implement ***Collections***, as in Flickr

<br>

### Flickr2Piwigo

[Flickr2Piwigo](https://piwigo.org/ext/extension_view.php?eid=612 "Flickr2Piwigo in Piwigo Extensions Marketplace") is a plugin to [[Switch to Piwigo|import pictures from Flickr]].

- Import album descriptions
- Import Collections as parent albums

<br>
<br>

## Zettlr

[Zettlr](https://www.zettlr.com) is the best Markdown editor out there.

<div class="red box">
	Since November 2020 I stopped using Zettlr because its work could be made by <a href="https://obsidian.md" rel="noopener noreferrer" target="_blank" title="Obsidian official website">Obsidian</a>
</div>

- Implement split view: two different notes side by side