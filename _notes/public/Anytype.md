---
date: 2021-10-14T17:20:13+02:00
updated: 2021-11-21T22:37:06+01:00
tags: draft geek/apps
description: A powerful knowledge management software, in early development
image: https://avatars.githubusercontent.com/u/50837219
toc: false
---
- how does Anytype connect to the outer world?
- basic data structure is in JSON?
- is the public front-end going to be customizable with a personal CSS and own TLD, etc.?
- ActivityPub/Fediverse implementation + Webmentions: how to link stuff which comes also from outside Anytype
- Spotlight search
- media files focus
- Personal data management implementation (check every CSV and its Shortcut)
- Import VCF
- Voice memos integration
- Co-existing media: not only avoid duplications in the system, but also make Anytype format compatible with other programs not only by exporting, but while files are in the app.
- understanding what/how much is stored locally and what/when it is kept in the backup server, according to which principle. Criteria for storing huge files? https://community.anytype.io/t/allow-user-to-initiate-full-sync-and-sync-for-a-perticular-object/2572
- Add “quote” styling option
- HTML formatting? Is it possible to select “view source”?
- Pandoc implementation: export as Markdown or HTML or docx etc. (also in iOS)
- import YAML metadata while importing Markdown files
- Shortcuts integration along with filesystem integration
- Plugins?

<br />
<br />

## Meta

- Switch to Matrix instead of using Discord

<br>
<br>

## Drafts

To post on https://community.anytype.io/t/future-plugin-extension-api-ideas/1397/9
```md
I believe that integration with **API**s is critical, since it would open Anytype to the outer world.  
While as of right now everything inside Anytype has to be written by us, I believe it is not an optional but a core feature being able to import, or, even better, **synchronize data with different services**.

Most common and important implementations:
- [Open Library](https://openlibrary.org 'Internet Archive’s Open Library'), to import data about books
- [IMDb](https://imdb.com), and/or [TMDb](themoviedb.org 'The Movie Database'), and/or [OMDb](https://www.omdbapi.com/ 'Open Movie Database API'), hence integrating movie data
- 
```