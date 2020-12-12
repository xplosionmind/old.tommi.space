---
date: 2020-02-02
updated: 2020-12-09
tags: geek
permalink: /development
redirect_from:
  - /development-roadmap
  - /roadmap
  - /wip
  - /issues
  - /improvements
  - /dev
---
Creative and technical aims, ideas annotation and drafts tracking.

## Not Working

- language loop in language selection
- Algolia search is only in the posts / blog
- `linear-gradient` display error in [Everyone](/everyone) page

<br>
<br>

## Content

### WIP

- [Making this website](/themakingof) article
- [[Giri]]
	- opera
	- teatro
	- concerti
	- conferenze
    - Alternanza Scuola-Lavoro
    - date ospiti Giffoni cineforum
    - Incontri Masterclass
    - Film in concorso Giffoni
- [[Playlist]]
- [[Cinema]]
- [[The Slot Philosophy]]
- add a “première” section to the [Everyone](/everyone) page
- [[Around the world]]
- [drafts](../_drafts/)

<br>

### To be created

- [[Articles ideas]]
- Add *Love* Jar item, with all of the definitions of love.
- ***self debugging***
		- a self-debugging script in programming ideas
		- provare a descrivere e scrivere di determinate situazioni e stati d'animo quando non ci si trova può essere anche un podo ancora inferiore per capirli e risolvere
- Add *Herbertismo* Jar item
- A program which counts the number of times a key has been clicked on a keyboard
- Desk Photo Archive
	- name
	- explanation `I've always been one of those people who's never satisfied about how their room is `
	- explanation 2 `Every 27 days, no matter what, at exactly 12:11 PM I'll have to take my camera and shoot a photo of my desk. No matter what's on it or how is it. Just to immortalize my main life companion in that moment.`
	- photos
- stabilire criteri di appartenenza a [[Internet Awesomeness]]

<br>
<br>

## Roadmap

Items in the following list are <u>sorted by <b>priority</b></u>. Thus, quick and easy features might be at the bottom but might also be the first ones to be implemented, while the ones at the top might be the most important, but they may require a longer time and harder work to be completed, so they'll be finished later.

1. **Get rid of jQuery**: it’s used just in one case and it’s not worth it: downloading it takes around 1.5s of the website loading time. Use pure JavaScript instead
1. [**Visioni**](/visioni)
	- <https://github.com/maxvoltar/photo-stream>
	- <http://benschwarz.github.io/gallery-css/>
	- Tania Rascia's guide for a [responsive gallery](https://www.taniarascia.com/how-to-build-a-responsive-image-gallery-with-flexbox/)
	- Photo selection
	- horizontal instead of vertical scrolling of the gallery
	- PDF portfolio download
1. Replace SEO tag with Liquid syntax
1. Take the most advantage possible from installed plugins
1. The new Jar:
	- show only parent tags / notes
	- an unstyled simple bullet point list
	- show notes graph only
	- index note
		- not working links are because notes are private
		- definition of Zettelkasten / Digital gardening
2. Swap Kramdown with MultiMarkdown
	- support for classes?
3. Access tags colors from posts and jar lists (change the color slightly also for every entry which is untagged)
4. **Tags**
		1. Use [jekyll-datapage_gen](https://github.com/avillafiorita/jekyll-datapage_gen) to generate tags pages
		1. Check [this plugin](https://github.com/field-theory/jekyll-tag-pages))
		1. [article 1](https://blog.webjeda.com/jekyll-tags/)
		1. [article 2](https://kylewbanks.com/blog/creating-tag-pages-in-jekyll-without-plugins)
		1. Configure [jTag](https://github.com/ttscoff/jtag)
	- [dropdown menu guide](https://www.w3schools.com/howto/howto_js_dropdown.asp)
5. Switch to [Zettelkasten](/zettelkasten)
	- [git submodules](https://www.taniarascia.com/git-submodules-private-content/)
	- make backlinks optional: insert `if` statement out of the `div` and make the box appear only if at least one backlink is present
	- ~~convert Zetelkasten links to ordinary links~~ 2020.12.12
	- ~~Backlinking~~ 2020.12.03
6. Pagination
7. Thumbnails in Zibaldone's feed
8. Improve [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/usage/) plugin
9. Style [caret-color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)
10. Add `image` tag in Jar elements
11. [jekyll-rakefile](https://github.com/avillafiorita/jekyll-rakefile)
12. Self-host website
13. Content history
	- now page
	- a timeline like [Jeremy gordon's](https://jgordon.io) or [jack.works](https://web.archive.org/web/20200513054829/http://jack.works/)
14. Convert some Jar elements to `_data` files
	- Quotes
	- Parole
	- Cinema
	- Jack Frusciante
	- Resources
	- rimm-db
15. Add [humans.txt](http://humanstxt.org)
16. Use `@import` to add fonts instead of linking their CSS reference files in HTML
17. Semantic HTML
18. Use more icons (e.g. jam jar)
19. {% raw %}`{% if page.tags contains 'draft' %}`{% endraw %} print a banner indicating that the page misses something
20. Implement little cool Javascript features, from [W3schools](https://www.w3schools.com/howto/)
21. Evaluate copyright change
22. [Bookmarked threads](https://talk.jekyllrb.com/u/xplosionmind/activity/bookmarks) on [Jekyll Talk](https://talk.jekyllrb.com/) (Jelyll's forum)
23. [implement side-notes](https://www.kooslooijesteijn.net/blog/sidenotes-without-js)
24. [improve header](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
25. Configure global properties in `_config.yml` to perform changes in a quicker way
26. [Typography](https://tommi.space/typography)
	- better reasoned typographic choices
    - [Custom font](https://tommi.space/Typography#Custom-font)
27. Setup mailing list
	- [listmonk](https://listmonk.app) or [Mailtrain](https://mailtrain.org)
	- [awesome-emails](https://github.com/jonathandion/awesome-emails)
	- [responsive template](https://github.com/leemunroe/responsive-html-email-template)
28. RSS Feeds management
    - Atom feed vs RSS
    - [customize `feed.xml`](https://stackoverflow.com/questions/12902840/how-to-add-a-permalink-to-a-jekyll-rss-feed)
    - feeds:
        - Poetry
        - Italian posts
        - English posts
        - The Jar
29. Mailtrain automation with RSS
30. Hosting on [server](/server) instead of using [Netlify](https://netlify.com)
    - Analytics (temporarily set up with [Goatcounter](https://goatcounter.com))
31. **CSS only** [dark/light mode **toggle**](https://youtu.be/b4FBTr5pSgw)
32. Improved and smart use of the `vh` and `vw` units. [A guide](https://css-tricks.com/fun-viewport-units/)
	- `.box` and `.stuff` max heights
33. A page which contains links to ALL PAGES (a sitemap?)
34. **Sorting** / **filtering** (using JavaScript?)
	- in Zibaldone and The Jar: language and tag filter
	- in Books: Sorting
35. Configure [**Webmentions**](https://indieweb.org/Webmention)
    - Follow [Indiewebify](https://indiewebify.me/send-webmentions/)'s guide
    - Setup [Webmention.io](https://webmention.io/)
    - Setup [Bridgy](https://brid.gy/)
36. Improve `blockquote`s; some insights:
	- <https://codepen.io/valentingalmand/pen/doJvRR>
	- <https://codepen.io/joshuajcollinsworth/pen/obbvYQ>
	- <https://codepen.io/JoeHastings/pen/MOdRVm>
37. Design improvements
	- make shades slightly colored, according to the belonging object
	- refine the color palette
38. Stick the menu bar to the bottom instead of sticking it to the top, as in [Humane Tech website](https://humanetech.com)
39. Piwigo integration?
40. Create Jekyll theme
41. Switch to [Hugo](https://gohugo.io)

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
- ~~[Jekyll Octopod](https://jekyll-octopod.github.io), podcast implementation~~ deprecated
- [podcast feed](https://github.com/benubois/podcast-feed), create a podcast feed
- [Jekyll Slim](https://github.com/sunnyrjuneja/jekyll-slim), to add [Slim Language](http://slim-lang.com) compatibility
- [Jekyll Compose](https://github.com/jekyll/jekyll-compose), to create posts and drafts quicker
- [Jekyll import](https://import.jekyllrb.com), to import content from other blogging platforms
- [Jekyll Pandoc Multiple Formats](https://github.com/fauno/jekyll-pandoc-multiple-formats)
- [Jekyll figure](https://github.com/paulrobertlloyd/jekyll-figure)

<br>

### Creative experiments

- desktop: floating “tags” column on the right
- [Generative Art](http://tholman.com/post/generative-art-speedrun/)
    - always-changing colors, see Zander Martineau’s [website](https://zander.wtf/)

<br>
<br>

## Done

- Animations (little and simple but effective)
    - buttons: `x`s and menus (see tokyo-voice.jp or traxmag.com)
- back-to-top button
- basic coloured biiig shapes
- Backlinks
- Better [Open Graph Protocol](https://ogp.me/) integration
- Button inner-shadow instead of transform when hovering
- “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- change mobile browser bar colour
- Color Jar items according to the belonging tag
- custom selection colour for text
- customise 404 page
- Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- tags description and link to stuff
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
- list of belonging tags at the top of the post page
- Make [about](/home#about) a page
- Mobile optimisation
- move `stuff extended` to `The Jar`
- [Neumorphism](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) **redesign**
	1. Start by smoothing corners
	1. go on by using [this tool](https://neumorphism.io/)
	1. use [Eva icons](https://jekyllrb.com/docs/pagination/)
- [Now page](https://sivers.org/now)
- page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/)
- Poetry
    - ~~section instead of tag~~
    - ~~custom styling~~
- Privacy Policy
- RSS Feed
- Self-host media and heavy files on `assets.tommi.space` to make git folder lighter
- separate website/repo/domain for web and online resources or for geek stuff in general (configured as _[The Jar](https://xplosionmind.tk/jar)_)
- Serif font styling in posts
- Share button
- [Share on Jekyll showcase](https://github.com/planetjekyll/showcase/pull/23)
- `stuff extended`
- SVG buttons
- Switch to **SCSS** for styling
- [table of contents](https://github.com/allejo/jekyll-toc)
- **Tags**
	- ~~move tags specifications to `_data`~~
	- ~~in every post, show the tags to which it belongs~~
	- ~~create unique page for all tags, anchor to choose a single one~~
		1. ~~Fix some tags which are repeated multiple times~~
		1. ~~Fix gradient not being displayed as text color (check [CSS Tricks](https://css-tricks.com)' titles on hover)~~
		1. ~~Display Jar elements in tags list~~
		1. ~~choose once and for all **`categories`** VS **`tags`**~~ (using `tags`)
		1. ~~Instead of inlining specific properties, create classes for every tag and create a `for` loop in SCSS accessing `site.data.tags` colors~~
		1. ~~Access tag data (such as color, bg-color, description) from the *_data* folder~~