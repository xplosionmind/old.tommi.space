---
permalink: /development
edited: 2020-11-12
description: "Creative and technical work to be done, ideas and drafts progress tracking on this website"
redirect_from:
  - /development-roadmap
  - /roadmap
  - /wip
  - /issues
  - /improvements
  - /dev
---
## Not Working

- **Dropdown menu toggle**
- global `permalink` configuration in `_config.yml`
- Tags page color display errors
- Article displayed in a category they don't belong to in [Tags page](/tags)
- `EB Garamond` and `Ubuntu Mono` includes
- language loop in language selection
- Parsing error in jar list elements with `a` tags
- SASS partials

<br>
<br>

## Incomplete Content

Work in progress content:

- [Making this website](/themakingof) article
- [Giri da spettatore](/giri)
- [Playlist](/playlist)
- [Cinema](/cinema)
- The [Slots Philosophy](/slots)
- add a “première” section to the [Everyone](./everyone) page
- [Around the World](/places)
    - Alternanza Scuola-Lavoro
    - date ospiti Giffoni cineforum
    - Incontri Masterclass
    - Film in concorso Giffoni
    - [**giri**](/giri)
        - opera
        - teatro
        - concerti
        - conferenze
- Add “Love„ Jar item, with all of the definitions of love.
- [drafts](./_drafts)

<br>
<br>

## Roadmap

This is a list. It's sorted by **priority**, not amount of work). Thus, quick and easy features might be at the bottom but might also be the first ones to be implemented, while the ones at the top might be the most important, but they may require a longer time and harder work to be completed, so they'll be finished later.

1. **Categories**
	- ~~move categories specifications to `_data`~~
	- add categories to The Jar notes
	- ~~in every post, show the categories to which it belongs~~
	- create unique page for all categories, anchor to choose a single one **to be improved**:
		1. Fix some categories which are repeated multiple times
		1. Display Jar elements in tags list
		1. choose once and for all **`tags`** VS **`categories`**
		1. ~~Access category data (such as color, bg-color, description) from the *_data* folder~~
		1. Use [jekyll-datapage_gen](https://github.com/avillafiorita/jekyll-datapage_gen) to generate categories pages
		1. Check [this plugin](https://github.com/field-theory/jekyll-category-pages))
		1. [article 1](https://blog.webjeda.com/jekyll-categories/)
		1. [article 2](https://kylewbanks.com/blog/creating-category-pages-in-jekyll-without-plugins)
		1. Configure [jTag](https://github.com/ttscoff/jtag)
1. Take the most advantage possible from installed plugins
1. Access categories colors from posts and jar lists (change the color slightly also for every entry which is untagged)
1. **Get rid of jQuery** (it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time) and use simple JavaScript for the task it’s used for
	- [dropdown menu guide](https://www.w3schools.com/howto/howto_js_dropdown.asp)
1. Switch to a [Zettelkasten approach](/zettelkasten)
	- how to convert Zetelkasten links to ordinary links
	- implement backlinking
		- [simply-jekyll](https://github.com/raghuveerdotnet/simply-jekyll), a template with backlinking setup
1. [Pagination](https://jekyllrb.com/docs/pagination/)
1. Thumbnails in Zibaldone's feed
1. Improve [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/usage/) plugin
1. [**Visioni**](/visioni)
	- <https://github.com/maxvoltar/photo-stream>
	- <http://benschwarz.github.io/gallery-css/>
	- Tania Rascia's guide for a [responsive gallery](https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/)
	- Photo selection
	- horizontal instead of vertical scrolling of the gallery
	- PDF portfolio download
1. Make `EB Garamond` and `Ubuntu Mono` work
1. a timeline like [Jeremy gordon's](https://jgordon.io) or [jack.works](https://web.archive.org/web/20200513054829/http://jack.works/)
1. Content history
	- now page
	- About page
1. Convert some Jar elements to `_data` files
	- Quotes
	- Parole
	- Cinema
	- Jack Frusciante
	- Resources
	- rimm-db
1. [implement side-notes](https://www.kooslooijesteijn.net/blog/sidenotes-without-js)
1. [improve header](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
1. Make [about](/home#about) a page
1. Improve `blockquote`s; some insights:
	- <https://codepen.io/valentingalmand/pen/doJvRR>
	- <https://codepen.io/joshuajcollinsworth/pen/obbvYQ>
	- <https://codepen.io/JoeHastings/pen/MOdRVm>
1. [Typography](https://xplosionmind.tk/typography)
	- better reasoned typographic choices
    - [Custom font](https://tommi.space/Typography#Custom-font)
1. [Mailtrain](https://mailtrain.org/) setup
1. RSS Feeds management
    - Atom feed vs RSS
    - [customize `feed.xml`](https://stackoverflow.com/questions/12902840/how-to-add-a-permalink-to-a-jekyll-rss-feed)
    - feeds:
        - Poetry
        - Italian posts
        - English posts
        - The Jar
1. Mailtrain automation with RSS
1. Hosting on [server](/server) instead of using [Netlify](https://netlify.com)
    - Analytics (temporarily set up with [Goatcounter](https://goatcounter.com))
1. **CSS only** [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw)
1. Improved and smart use of the `vh` and `vw` units. [A guide](https://css-tricks.com/fun-viewport-units/)
	- `.box` and `.stuff` max heights
1. A page which contains links to ALL PAGES (a sitemap?)
1. Add at the end of each page a list of all the other pages of the website (and maybe of the whole web, with Webmentions (see below)) which link to the current page.
1. Evaluate [switching to CommonMark](https://commonmark.org)
1. Stick the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com)
1. **Sorting** / **filtering** (using JavaScript?)
	- in Zibaldone and The Jar: language and category filter
	- in Books: Sorting
1. Configure [**Webmentions**](https://indieweb.org/Webmention)
    - Follow [Indiewebify](https://indiewebify.me/send-webmentions/)'s guide
    - Setup [Webmention.io](https://webmention.io/)
    - Setup [Bridgy](https://brid.gy/)
1. Includes with `CC0` and `All rights reserved` to be added is specific pages
1. Switch to [Hugo](https://gohugo.io)
1. Color palettes improvement

<br>
<br>

## Plugins

Check [Awesome Jekyll Plugins](https://github.com/planetjekyll/awesome-jekyll-plugins/). A list of interesting plugins which aren't installed yet follows:

- [Jekyll image processing](https://github.com/benubois/jekyll_image_processing)
- [Titles from headings](https://github.com/benbalter/jekyll-titles-from-headings)
- [Polyglot](https://polyglot.untra.io/), to easily make Jekyll multi-language
- [Jekyll picture tag](https://github.com/rbuchberger/jekyll_picture_tag), responsive images
- [Responsive images](https://github.com/wildlyinaccurate/jekyll-responsive-image)
- [Jekyll Ordinal](https://github.com/patrickcate/Jekyll-Ordinal)
- [Jekyll Octopod](https://jekyll-octopod.github.io), podcast implementation
- [podcast feed](https://github.com/benubois/podcast-feed), create a podcast feed
- [Jekyll Slim](https://github.com/sunnyrjuneja/jekyll-slim), to add [Slim Language](http://slim-lang.com) compatibility
- [Jekyll Compose](https://github.com/jekyll/jekyll-compose), to create posts and drafts quicker
- [Jekyll import](https://import.jekyllrb.com), to import content from other blogging platforms
- [Jekyll Pandoc Multiple Formats](https://github.com/fauno/jekyll-pandoc-multiple-formats)
- [Jekyll figure](https://github.com/paulrobertlloyd/jekyll-figure)

<br>
<br>

### Creative experiments

- [desktop]: floating “categories” column on the right
- [Generative Art](http://tholman.com/post/generative-art-speedrun/)
    - always-changing colors, see Zander Martineau’s [website](https://zander.wtf/)

<br>
<br>

## Done

- Animations (little and simple but effective)
    - buttons: `x`s and menus (see tokyo-voice.jp or traxmag.com)
- back-to-top button
- basic coloured biiig shapes
- Better [Open Graph Protocol](https://ogp.me/) integration
- Button inner-shadow instead of transform when hovering
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar colour
- custom selection colour for text
- customise 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- categories description and link to stuff
- checkbox styling
- [Convert to **flex**](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- CSS cleanup
- CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- cursor styling
- final header configuration
- Fix [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51).
- gif instead of images 
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
- inline code styling
- input fields styling
- Language selection straight from landing page - 2020.09.11
- language switch
- `letter-spacing` and `word spacing` (it's nice as it is)
- light/dark mode switch button (I'm deep and dark / I'm bright and shiny)
- list of belonging categories at the top of the post page
- Mobile optimisation
- move `stuff extended` to `The Jar`
- [Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) **redesign**
	1. Start by smoothing corners
	1. go on by using [this tool](https://neumorphism.io/)
	1. use [Eva icons](https://jekyllrb.com/docs/pagination/)
- [Now page](https://sivers.org/now)
- page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/)
- Poetry
    - ~~section instead of category~~
    - ~~custom styling~~
- Privacy Policy
- RSS Feed
- separate website/repo/domain for web and online resources or for geek stuff in general (configured as _[The Jar](https://xplosionmind.tk/jar)_)
- Serif font styling in posts
- Share button
- [Share on Jekyll showcase](https://github.com/planetjekyll/showcase/pull/23)
- `stuff extended`
- SVG buttons
- Switch to **SCSS** for styling
- [table of contents](https://github.com/allejo/jekyll-toc)
