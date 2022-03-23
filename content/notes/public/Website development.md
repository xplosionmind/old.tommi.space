---
date: 2020-02-02T01:00:00+01:00
updated: 2022-03-22T10:28:18+01:00
tags:
  - meta
  - geek/web
aliases: tommi.space, Development Roadmap, Website todo, Meta
permalink: /development/
redirect_from: [/development-roadmap/,/roadmap/,/wip/,/issues/,/improvements/,/dev/,/website-development/,/tommi.space/]
main: true
image: /2020-04-18-making-this-website.jpg
description: Creative and technical aims, ideas annotation and drafts tracking.
---
## Content

![[Writing ideas#Website]]

<br>
<br>

## Roadmap

### v1

1. Improve [Webmentions](https://aarongustafson.github.io/jekyll-webmention_io/ 'Documentation for jekyll-webmention_io plugin') templating and display
1. 🏗 [The Jam](/jam 'The Jam'): implement [jekyll-graph](https://github.com/manunamz/jekyll-graph 'jekyll-graph on GitHub')
1. page redirection language
1. Blog posts pagination
1. improved Wikilinks
1. [Multilingual sitemap](https://github.com/quasibit/eleventy-plugin-sitemap#create-a-multilingual-sitemap)

<br>

### v2

1. Temporary *pseudo-[[Zig]]*: a “changelog” section in homepage, [looping through](https://talk.jekyllrb.com/t/loop-through-all-pages-of-the-website/6880 'Loop through ALL pages in a website - Jekyll Talk') the last few pages updated recently (based on `page.updated`)
1. Improve search
2. Add a section in each note where `if more`, in the front matter `more: https://en.wikipedia.org/wiki/Love` (encyclopedia page of the same topic)
3. Self-hosted analytics
1. automatic CV compiling implementation
9. Full width images in posts and `article`’s `max-width` instead of `padding`
14. Consider switching from [a unique page with all tags][tags] to individual pages for each tag

<br>

### v3

1. Configure and implement [ActivityPub]
	- [RSS to ActivityPub](https://github.com/dariusk/rss-to-activitypub 'rss-to-activitypub on GitHub')
	- [Bridgy Fed](https://fed.brid.gy/ 'Bridgy Fed')
	- [Nautilus](https://github.com/aaronpk/Nautilus 'Nautilus on GitHub')
1. automatic [[Sconnesso]] audios transctiptions
1. [**<cite>Visions</cite>**](https://visions.tommi.space 'Visioni - Tommi Space') improvement: see [[Images#Gallery improvement]] and [[Flickr to Piwigo]]).
	- <https://github.com/maxvoltar/photo-stream>
	- <http://benschwarz.github.io/gallery-css/>
	- Tania Rascia’s guide for a [responsive gallery](https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/ 'How to build a responsive gallery with flexbox')
2. Improved building workflow
	1. Integrate URL checking services in the workflow
		- [Urlint](https://urlint.co/integration/github.html 'Urlint')
8. [The Jam](/jam 'The Jam'): Preview a note when hovering on link
3. [Watchlog](https://github.com/xplosionmind/data/blob/main/watchlog.csv 'watchlog.csv on GitHub') implementation

<br>

### v4

- get CSVs from URLs with JavaScript instead of buildtime (pseudo [[Nolan]] implementation)
- [[Nolan]] implementation
- [[Anytype]] implementation
- [Generative Art](https://generativeartistry.com 'Generative artistry')
	- always-changing colors, see Zander Martineau’s [website](https://zander.wtf/ 'Zander Martineau')

<br>

### further improvements

- Configure and implement [jekyll-embed-urls](https://0xacab.org/sutty/jekyll/jekyll-embed-urls 'jekyll-embed-urls repository')
- [[GiTMI|Migrate]] the source code of this website [from GitHub](https://github.com/xplosionmind/tommi.space 'tommi.space on GitHub') to [GiTMI](https://gitmi.dev 'my self-hosted Gitea')
- [Reading progress bar](https://css-tricks.com/fun-viewport-units/#getting-weird 'Fun viewport units - CSS Tricks')
- Join [xxiivv Webring](https://github.com/XXIIVV/webring 'XIIVV Webring on GitHub')
- Remove JavaScript
	- CSS only [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw 'How to  make a CSS-only theme toggle') - 2021-06-15 <b class='missing'>bug</b>: if `input` is before `body`, it is automatically moved inside by the browser
- Study [awesome-web-animation website](https://awesome-web-animation.netlify.app/ 'Awesome Web Animation'), possibly considering [Isso](https://posativ.org/isso/ 'Isso')
- Flash animation of exploding head emojis while a button is `active` and/or `hover`
- Use [jekyll-exif-data](https://github.com/NiklasEi/jekyll-exif-data/ 'jekyll-exif-data on GitHub') to print a picture place and time in `figcaption` by default
- Consider using [jekyll-git-metadata](https://github.com/ivantsepp/jekyll-git_metadata/ 'jekyll-git-metadata on GitHub') instead of jekyll-modified-at and insert a “last updated” entry on homepage (or footer)
- `.onion` address
- [[Permanent HTML]]
- Use [jekyll-multisite](https://github.com/sumdog/jekyll-multisite 'jekyll-multisite on GitHub') with [quitsocialmedia.club](https://quitsocialmedia.club 'Quit Social Media') and [PISE notes](https://pise-notes.club 'PISE notes')
- Use typographic animations
	- [AxisPraxis’ Zycon](https://www.axis-praxis.org/specimens/zycon 'Zycon')
	- [Anicons](https://typogram.github.io/Anicons/ 'Anicons')
- prefer animated GIFs over static images
- Create Jekyll theme
- Consider hosting on [[Server]] instead of using [Netlify](https://netlify.com 'Netlify')
	- [jekyll-ftp](https://github.com/JesseHerrick/jekyll-ftp/ 'jekyll-ftp on GitHub')
	- [Blogroll automated Generation](https://jlelse.blog/dev/miniflux-blogroll 'Miniflux Blogroll')
- Consider sticking the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com 'Humane Tech') and [Victoria Drake](https://victoria.dev)
- Consider switching to [Eleventy](https://11ty.dev 'Eleventy') or [Hugo](https://gohugo.io 'Hugo')

<br>

### page-specific to-dos

<ul>
{% for p in collections.all %}
{% if p.data.todo %}
<li><a href='{{ p.url }}' title='{{ p.data.title }}'>{{ p.data.title }}</a>:<ul>
{% for task in p.data.todo %}
<li>{{ task | markdownify }}</li>
{% endfor %}
</ul></li>
{% endif %}
{% endfor %}
</ul>

<br>
<br>

## Done

- ✅ <time datetime='2021-12-23T22:03:42+01:00'>2021-12-23</time> fixed broken RSS feeds
- ✅ <time datetime='2021-12-23T21:31:47+01:00'>2021-12-23</time> improve cursor visibility
- ✅ <time datetime='2021-12-23T20:15:42+01:00'>2021-12-23</time> change preview
- ✅ <time datetime='2021-12-16T00:06:34+01:00'>2021-12-16</time> Check [HTML best practices](https://hail2u.github.io/html-best-practices/ 'HTML best practices')
- ✅ <time datetime='2021-12-16T00:05:15+01:00'>2021-12-16</time> better TOC positioning and spacing
- ✅ <time datetime='2021-12-15T01:24:54+01:00'>2021-12-15</time> ~~[Self-hosted comments](https://www.taniarascia.com/add-comments-to-static-site/ 'Roll Your Own Comment System for a Static Site') service~~ Switched from [utteranc.es](https://utteranc.es 'Utterances') (that needed an authentication and it was GitHub-based) to a [self-hosted](https://bla.tommi.space 'Tommi’s comments') [Commento](https://commento.io 'Commento official website') instance.
- ✅ 2021-10-30 Month translation in Italian pages
- ✅ Configure and implement [[Indie Web]]
- Add a “**Looking for help**” page where are listed all the things (tagged `help`) for which I would love to receive assistance and thoughts ✅ 2021-05-25
- Add [`this page was designed to last`](https://jeffhuang.com/designed_to_last/) - ✅ 2021.05.20
- Switch to [variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide 'Variable fonts guide on MDN') ✅ 2021.04.28
- At the top of the page, add anchors buttons which link to comments, backlinks, etc. ✅ 2021.04.17
- `page.location` improvement ✅ 2021.04.13
- Check the OpenStreetMap API and figure out a way to implement [[Around the world|Places]] in a map interface, integrating it with [[Nolan|Timeline]] ✅ 2021.04.13
- **Sorting** and **filtering** using JavaScript ✅ 2021.01.29
- The new [Jam](/jam 'The Jam'):
	- show only parent/main tags and notes ✅ 2021.01.16
	- an unstyled simple bullet point list ✅ 2021.01.16
- Add [`humans.txt`](http://humanstxt.org 'humans.txt') ✅ 2021.01.17
- In [Books](/books) add IDs to every row corresponding to the title of the book (I posted [a question about this on the Jekyll forum](https://talk.jekyllrb.com/t/table-data-id-in-tablerow-loop/5398)) (done but to be improved: IDs are generated for every `td`, I think it’s necessary to use a for loop instead of a `tablerow` loop). ✅ 2020.12.31
- `text-shadow` CSS property in titles and in `a:hover` ✅ 2020.12.30
- Use more Emojis ✅ 2020.12.30
- Thumbnails in Zibaldone’s feed ✅ 2020.12.30
- **Get rid of jQuery**: it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time. Use pure JavaScript instead ✅ 2020-12-25 **FINALLY** !
- `{% raw %}{% if page.tags contains 'draft' %}{% endraw %}` print a banner indicating that the page misses something ✅ 2020-12-25
- Use `@import` to add fonts instead of linking their CSS reference files in HTML ✅ 2020.12.25
- Switch to [[Zettelkasten]]
	- [git submodules](https://www.taniarascia.com/git-submodules-private-content/)
	- make backlinks optional: insert `if` statement out of the `div` and make the box appear only if at least one backlink is present
	- convert Zetelkasten links to ordinary links ✅ 2020.12.12
	- Backlinking ✅ 2020.12.03
- Scroll-to-bottom button which transforms into scroll-to-top after a certain height scrolling the page ✅ 2020.01.17
- Animations (little and simple but effective)
	- buttons: `x`s and menus (see [Tokyo voice](https://tokyo-voice.jp 'Tokyo Voice') or [Trax mag](https://www.traxmag.com 'Trax Magazine'))
- back-to-top button
- basic colored biiig shapes
- Backlinks
- Better [Open Graph Protocol](https://ogp.me/) integration
- Button inner-shadow instead of transform when hovering
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar color
- Color Jam items according to the belonging tag
- custom selection color for text
- customize 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- tags description and link to stuff
- checkbox styling
- CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- cursor styling
- 🏗 2021.09.26 [Embed Mastodon feed](https://github.com/DomainDrivenArchitecture/dda-masto-embed 'dda-masto-embed on GitHub')
- final header configuration
- Fix [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51).
- **Global search**
	- [Algolia](https://www.algolia.com/)
		- [jekyll-algolia](https://community.algolia.com/jekyll-algolia/) plugin ([source](https://github.com/algolia/jekyll-algolia))
		- [Algolia for Open Source](https://www.algolia.com/for-open-source/)
	- [Lunr](https://lunrjs.com/)
		- [Lunr setup](https://zoeleblanc.com/blog/adding-search-to-jekyll-sites-with-lunr/) article 1
		- [Lunr setup](https://www.arcath.net/2016/02/setting-up-lunr-js-in-jekyll) article 2
	- [custom](https://nachtimwald.com/2020/06/10/full-text-search-with-jekyll/)
- Hover effects
- `id` anchor links
- [Host pictures on Piwigo](https://piwigo.org/forum/viewtopic.php?id=31165 'Embedding images and galleries in HTML - Piwigo Forum') and display them via API or public link
- Improved and smart use of the `vh` and `vw` units. [A guide](https://css-tricks.com/fun-viewport-units/)
	- `.box` and `.stuff` max heights
- inline code styling
- input fields styling
- Language selection straight from landing page - 2020.09.11
- language switch
- `letter-spacing` and `word spacing` (it’s nice as it is)
- light/dark mode switch button (I'm deep and dark / I'm bright and shiny)
- list of belonging tags at the top of the post page
- Make [about](/about) a page
- Mobile optimisation
- move `stuff extended` to `The Jam`
- [Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6 'What is Neumorphism') **redesign**
	1. Start by smoothing corners
	1. go on by using [this tool](https://neumorphism.io/ 'Neumorphism')
	1. use Eva icons
- [Now page](https://sivers.org/now 'Derek Siver's Now Page')
- page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/ 'Open Graph Protocol')
- Poetry
	- section instead of tag
	- custom styling
- Privacy Policy
- RSS Feed
- Self-host media and heavy files on `assets.tommi.space` to make git folder lighter
- separate website/repo/domain for web and online resources or for geek stuff in general (configured as *[The Jam](/jam 'The Jam')*
- Serif font styling in posts
- Share button
- [Share on Jekyll showcase](https://github.com/planetjekyll/showcase/pull/23)
- [Stuff extended](/tutto)
- SVG buttons
- Switch to **SCSS**
	- [How to prepare and use variable fonts on the web](https://thetrevorharmon.com/blog/how-to-prepare-and-use-variable-fonts-on-the-web 'How to prepare and use variable fonts on the web \| The Trevor Harmon') by [Trevor Harmon](https://thetrevorharmon.com/ 'Trevor Harmon')
	- [Creating a subset font](https://michaeljherold.com/articles/creating-a-subset-font/ 'Creating a subset font') by [Michael Herold](https://michaeljherold.com/ 'Michael Herold')
	- See [[Typography#Font subsetting]]
- [table of contents](https://github.com/allejo/jekyll-toc)
- **Tags**
	- move tags specifications to `_data`
	- in every post, show the tags to which it belongs
	- create unique page for all tags, anchor to choose a single one
		1. Fix some tags which are repeated multiple times
		1. Fix gradient not being displayed as text color (check [CSS Tricks](https://css-tricks.com 'CSS Tricks')' titles on hover)
		1. Display Jam elements in tags list
		1. choose once and for all **`categories`** VS **`tags`** (chose `tags`)
		1. Instead of inlining specific properties, create classes for every tag and create a `for` loop in SCSS accessing `site.data.tags` colors
- Use [**`flex`**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 'A guide to flexbox on GSS Tricks')
- Telegram comments: `<script async src='https://comments.app/js/widget.js?3' data-comments-app-website='bfg-ZXp6' data-limit='5' data-color='FCC920' data-dark='1'></script>` - ❌ 2021.03.26 not working! Also: probably the script works only for individual domains, not for every page.
- [implement side-notes](https://www.kooslooijesteijn.net/blog/sidenotes-without-js) ❌ decided not to implement it (for the moment). See [Website log: sidenotes](/meta#sidenotes)


[ActivityPub]: https://activitypub.rocks/ 'ActivityPub'
[tags]: /tags 'The Tags Bible'
