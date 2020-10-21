---
permalink: /development
edited: 2020-10-21
description: "Creative and technical work to be done, ideas and drafts progress tracking on this website"
---
## Not Working

- global `permalink` configuration in `_config.yml`
- Subheadings display issue on mobile. [Example page](https://tommi.space/server-setup#nextcloud-configuration)
- language loop in language selection
- Parsing error in jar list elements with `a` tags

<br>
<br>

## WIP

Work in progress contents:

- [Making this website](/themakingof) article
- [Giri da spettatore](/giri)
- [Playlist](/playlist)
- [Cinema](/cinema)
- add a “première” section to the [Everyone](./everyone) page
- [Around the World](/places)
    - Alternanza Scuola-Lavoro
    - date ospiti Giffoni cineforum
    - Incontri Masterclass
    - Film in concorso Giffoni
    - [**spettatore**](/giri)
        - opera
        - teatro
        - concerti
        - conferenze
- [drafts](./_drafts)

<br>
<br>

## Roadmap

This is a list. It's sorted by **priority**, not amount of work). Thus, quick and easy features might be at the bottom but might also be the first ones to be implemented, while the ones at the top might be the most important, but they may require a longer time and harder work to be completed, so they'll be finished later.

1. Image vertical alignment in Stuff
1. Fix [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51).
1. **Get rid of jQuery** (it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time) and use simple JavaScript for the task it’s used for ([dropdown menu guide](https://www.w3schools.com/howto/howto_js_dropdown.asp))
1. **Categories**
	- ~~move categories specifications to `_data`~~
	- ~~add categories to The Jar~~
	- ~~in every post, show the categories to which it belongs~~
	- create unique page for all categories, anchor to choose a single one **to be improved**:
		- Display Jar elements in tags list
		- choose once and for all **`tags`** VS **`categories`**
		- Access category data (such as color, bg-color, description) from the *_data* folder
		- Check [this plugin](https://github.com/field-theory/jekyll-category-pages))
		- [article 1](https://blog.webjeda.com/jekyll-categories/)
		- [article 2](https://kylewbanks.com/blog/creating-category-pages-in-jekyll-without-plugins)
1. Thumbnails in Zibaldone’s feed
1. [Pagination](https://jekyllrb.com/docs/pagination/)
1. [**Visioni**](/visioni)
	- unsorted photos randomly moving
	- horizontal instead of vertical scrolling of the gallery
	- downloadable PDF portfolio
1. **Global search**
    - [Algolia](https://www.algolia.com/)
        - [jekyll-algolia](https://community.algolia.com/jekyll-algolia/) plugin ([source](https://github.com/algolia/jekyll-algolia))
        - [Algolia for Open Source](https://www.algolia.com/for-open-source/)
    - [Lunr](https://lunrjs.com/)
        - [Lunr setup](https://zoeleblanc.com/blog/adding-search-to-jekyll-sites-with-lunr/) article 1
        - [Lunr setup](https://www.arcath.net/2016/02/setting-up-lunr-js-in-jekyll) article 2
    - [custom](https://nachtimwald.com/2020/06/10/full-text-search-with-jekyll/)
1. [Typography](https://xplosionmind.tk/typography)
	- better reasoned typographic choices
    - [Custom font](https://tommi.space/Typography#Custom-font) implementation
1. [Mailtrain](https://mailtrain.org/) setup
1. RSS Feeds management
    - [customize `feed.xml`](https://stackoverflow.com/questions/12902840/how-to-add-a-permalink-to-a-jekyll-rss-feed)
1. Mailtrain automation with RSS
1. Hosting on [server](/server) instead of using [Netlify](https://netlify.com)
    - Analytics (temporarily set up with [Goatcounter](https://goatcounter.com))
1. Poetry
    - ~~section instead of category~~
    - ~~custom styling~~
    - custom feed
1. **CSS only** [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw)
1. Stick the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com)
1. **Sorting** / **filtering** (using JavaScript?)
	- in Zibaldone and The Jar: language and category filter
	- in Books: Sorting
1. Configure [**Webmentions**](https://indieweb.org/Webmention)
    - Follow [Indiewebify](https://indiewebify.me/send-webmentions/)'s guide
    - Setup [Webmention.io](https://webmention.io/)
    - Setup [Bridgy](https://brid.gy/)
1. Configure [jTag](https://github.com/ttscoff/jtag)
1. Flickr APIs for embedded/integrated/automated galleries
    - use [FlickrEmbed](https://flickrembed.com/)
    - or use [Flickr APIs](https://www.flickr.com/services/api/)
    - or use [simpler embedding](https://help.flickr.com/en_us/share-or-embed-flickr-photos-or-albums-rJBx6mjyX)
1. Includes with `CC0` and `All-rights-reserved` to add in specific pages

<br>
<br>

### Creative experiments

- [desktop]: floating “categories” column on the right
- [Generative Art](http://tholman.com/post/generative-art-speedrun/)
    - always-changing colors, see Zander Martineau’s [website](https://zander.wtf/)
- everything center-aligned, also on desktop
- colour palettes improvement

<br>
<br>

## Done

- Animations (little and simple but effective)
    - buttons: `x`s and menus (see tokyo-voice.jp or traxmag.com)
- back-to-top button
- basic coloured biiig shapes
- Better [Open Graph Protocol](https://ogp.me/) integration
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar colour
- custom selection colour for text
- customise 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- categories description and link to stuff
- checkbox styling
- CSS cleanup
- CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- cursor styling
- final header configuration
- gif instead of images 
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
