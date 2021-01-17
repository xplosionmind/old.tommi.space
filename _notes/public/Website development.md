---
date: 2020-02-02
updated: 2021-01-17T16:11:50.164924+01:00
tags: meta, geek, web
aliases: ["Development", "tommi.space", "Development Roadmap"]
permalink: /development
redirect_from: ["/development-roadmap", "/roadmap", "/wip", "/issues", "/improvements", "/dev", "/website-development", "tommi.space"]
main: true
description: "Creative and technical aims, ideas annotation and drafts tracking."
---
## Not Working

- Algolia search index [is limited](https://github.com/algolia/algoliasearch-netlify/issues/166 "GitHub issue")

<br>
<br>

## Content

### WIP

- [drafts](/tags#draft "everything tagged as “draft”")
- [[Giri]]
	- opera
	- teatro
	- concerti
	- conferenze
	- Alternanza Scuola-Lavoro
	- date ospiti Giffoni cineforum
	- Incontri Masterclass
	- Film in concorso Giffoni
- add a “première” section to the [Everyone](/everyone) page

<br>

### To be created

- [[Articles ideas]]

<br>
<br>

## Roadmap

Items in the following list are <u>sorted by priority</u>. Thus, quick and easy features might be at the bottom but might also be the first ones to be implemented, while the ones at the top might be the most important, but they may require a longer time and harder work to be completed, so they'll be finished later.

1. Configure [[Indie Web]]
1. [[The Jam]]: Preview a note when hovering on link
1. [[The Jam]]: Notes graph
1. Create git submodules / Gists for every file which is significant alone ([[Apps]], [[Server]], [[Server setup]], [[Blogroll]]…)
1. Stop using Algolia and consider faster and simpler alternatives
	- [Lunr](https://lunrjs.com "Lunr")
	- [Searchyll](https://github.com/omc/searchyll "Searchyll on GitHub")
	- [a simpler and lighter search service](https://project-awesome.org/agarrharr/awesome-static-website-services#search "Awesome Static Websites Services - Search")
1. [***Visions***](https://visions.tommi.space "Visioni - Tommi Space") improvement: see [[Images]] and [[Switch to Piwigo]]).
1. Replace [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/usage/) with Liquid syntax
1. Implement little cool JavaScript features, from [W3schools](https://www.w3schools.com/howto/ "W3Schools HowTos")
1. **Sorting** and **filtering** using JavaScript
	- in Zibaldone and The Jar: language and tag filter
	- in Books: Sorting
1. Host pictures [on Piwigo](https://visions.tommi.space "My Piwigo photo gallery") and display them via API or public link
1. CSS only [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw)
1. A script to check permalinks overlapping

<br>
<br>

### Further ideas

- [Generative Art](http://tholman.com/post/generative-art-speedrun/ "Generative Art on Tim Holman's blog")
	- always-changing colors, see Zander Martineau’s [website](https://zander.wtf/ "Zander Martineau")
- GIFs instead of images 
- Improve `blockquote`s
	- <https://codepen.io/valentingalmand/pen/doJvRR>
	- <https://codepen.io/joshuajcollinsworth/pen/obbvYQ>
	- <https://codepen.io/JoeHastings/pen/MOdRVm>
- Image gallery creation
	- <https://github.com/maxvoltar/photo-stream>
	- <http://benschwarz.github.io/gallery-css/>
	- Tania Rascia's guide for a [responsive gallery](https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/ "How to build a responsive gallery with flexbox")
- Create Jekyll theme
- Consider hosting on [[Server]] instead of using [Netlify](https://netlify.com "Netlify")
- Consider switching to [Hugo](https://gohugo.io "Hugo")
- Add a timeline like [Jeremy Gordon's](https://jgordon.io "Jeremy Gordon") or [jack.works](https://web.archive.org/web/20200513054829/http://jack.works/)
- Stick the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com "Humane Tech") and [Victoria Drake](https://victoria.dev)
- [[Typography|Typographic]] improvements

<br>
<br>

## Done

- Add [`humans.txt`](http://humanstxt.org "humans.txt") ✅ 2021.01.17
- Animations (little and simple but effective)
	- buttons: `x`s and menus (see <tokyo-voice.jp> or <traxmag.com>)
- back-to-top button
- basic colored biiig shapes
- Backlinks
- Better [Open Graph Protocol](https://ogp.me/) integration
- Button inner-shadow instead of transform when hovering
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar color
- Color Jar items according to the belonging tag
- Consider dropping Kramdown for better performance and use [CommonMark](https://github.com/jekyll/jekyll-commonmark "jekyll-commonmark plugin on GitHub") instead ✅ 2021.01.09
- custom selection color for text
- customize 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- tags description and link to stuff
- checkbox styling
- CSS cleanup
- CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- cursor styling
- final header configuration
- Fix [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51).
- **Get rid of jQuery**: it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time. Use pure JavaScript instead ✅ 2020-12-25 **FINALLY** !
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
- `{% raw %}{% if page.tags contains 'draft' %}{% endraw %}` print a banner indicating that the page misses something ✅ 2020-12-25
- [implement side-notes](https://www.kooslooijesteijn.net/blog/sidenotes-without-js) ❌ decided not to implement it. See [Sidenotes](/website-log#sidenotes)
- Improved and smart use of the `vh` and `vw` units. [A guide](https://css-tricks.com/fun-viewport-units/)
	- `.box` and `.stuff` max heights
- In [Books](/books) add IDs to every row corresponding to the title of the book (I posted [a question about this on the Jekyll forum](https://talk.jekyllrb.com/t/table-data-id-in-tablerow-loop/5398)) (done but to be improved: IDs are generated for every `td`, I think it's necessary to use a for loop instead of a `tablerow` loop). ✅ 2020.12.31
- inline code styling
- input fields styling
- Language selection straight from landing page - 2020.09.11
- language switch
- `letter-spacing` and `word spacing` (it's nice as it is)
- light/dark mode switch button (I'm deep and dark / I'm bright and shiny)
- list of belonging tags at the top of the post page
- Make [about](/about) a page
- Mobile optimisation
- move `stuff extended` to `The Jar`
- [Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) **redesign**
	1. Start by smoothing corners
	1. go on by using [this tool](https://neumorphism.io/)
	1. use Eva icons
- [Now page](https://sivers.org/now)
- page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/)
- Poetry
	- section instead of tag
	- custom styling
- Privacy Policy
- RSS Feed
- Scroll-to-bottom button which transforms into scroll-to-top after a certain height scrolling the page ✅ 2020.01.17
- Self-host media and heavy files on `assets.tommi.space` to make git folder lighter
- separate website/repo/domain for web and online resources or for geek stuff in general (configured as [*The Jar*](/jar))
- Serif font styling in posts
- Share button
- [Share on Jekyll showcase](https://github.com/planetjekyll/showcase/pull/23)
- [*stuff extended*](/tutto)
- SVG buttons
- Switch to **SCSS** for styling
- Switch to [Zettelkasten](/zettelkasten)
	- [git submodules](https://www.taniarascia.com/git-submodules-private-content/)
	- make backlinks optional: insert `if` statement out of the `div` and make the box appear only if at least one backlink is present
	- convert Zetelkasten links to ordinary links ✅ 2020.12.12
	- Backlinking ✅ 2020.12.03
- [table of contents](https://github.com/allejo/jekyll-toc)
- **Tags**
	- move tags specifications to `_data`
	- in every post, show the tags to which it belongs
	- create unique page for all tags, anchor to choose a single one
		1. Fix some tags which are repeated multiple times
		1. Fix gradient not being displayed as text color (check [CSS Tricks](https://css-tricks.com)' titles on hover)
		1. Display Jar elements in tags list
		1. choose once and for all **`categories`** VS **`tags`** (chose `tags`)
		1. Instead of inlining specific properties, create classes for every tag and create a `for` loop in SCSS accessing `site.data.tags` colors
- `text-shadow` CSS property in titles and in `a:hover` ✅ 2020.12.30
- The new [[The Jam|Jam]]:
	- show only parent/main tags and notes ✅ 2021.01.16
	- an unstyled simple bullet point list ✅ 2021.01.16
- Thumbnails in Zibaldone's feed ✅ 2020.12.30
- Use `@import` to add fonts instead of linking their CSS reference files in HTML ✅ 2020.12.25
- Use [**`flex`**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ "A guide to flexbox on GSS Tricks")
- Use more Emojis ✅ 2020.12.30