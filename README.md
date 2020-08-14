[![Netlify Status](https://api.netlify.com/api/v1/badges/c7f3a969-424a-450b-8636-2d477af82e76/deploy-status)](https://app.netlify.com/sites/xplosionmind/deploys)

## WIP

- **FIX RSS FEED which is not generated**

Work in progress pages:

- [drafts folder](./_drafts)
- [Radioimmaginaria comprehensive list](./pages/radioimmaginaria-database.md) of episodes I’m in
- [Database of my brain](./_jar/2020-06-04-brain-database.md), list of all the stuff I know and need to know
- [deGoogle](./_jar/2020-06-03-deGoogle.md) Jar item
- [Making this website](./_posts/2020-04-18-Making-this-website.md) article
- [Stuff extended](./pages/stuff-extended-it)
	- LISTA VIDEO GIFFONI FACTORY
	- DATE OSPITI GIFFONI CINEFORUM
	- INCONTRI MASTERCLASS
	- FILM IN CONCORSO GIFFONI
	- LINK MATERIALE EVERYONE
	- CAMOGLI FESTIVAL COM
	- ROCKIN1000 LINATE
	- DEEJAY TEN
	- SPETTATORE
		- opera
		- teatro
		- concerti
		- conferenze
	- Alternanza scuola-lavoro
- [Playlist](./_jar/2020-07-17-Playlist.md)
- [Cinema](./_jar/2020-07-10-Cinema.md)
- add a “première” section to [everyone](./everyone) page
- [Around the World](./_jar/2020-07-20-Around-the-world.md)


pages to be created:

- Movies
- Books passages


## FEATURES CHECKLIST

A walkthrough of the website creation is [here](https://xplosionmind.tk/themakingof)

- [ ] access post category colour (and how conflicts are managed if the post has more than one category) in posts list
- [ ] add categories list also in the Jar
- [ ] Analytics (temporarily set up with goatcounter)
- [ ] automatic `rel="noopener noreferrer" target="_blank"` addition to `<a>` tags. Testing [jekyll-target-blank](https://github.com/keithmifsud/jekyll-target-blank) plugin, which is **NOT WORKING**! See the [related issue](https://github.com/keithmifsud/jekyll-target-blank/issues/51)
- [ ] back to top button
- [ ] checkbox styling
- [ ] Copyright specifications
	- [ ] in Everyone page
	- [ ] better indication of external resources' creators
- [ ] [CSS only dark/light mode toggle](https://youtu.be/b4FBTr5pSgw)
- [ ] CSV databases (check [this post](https://jekyllrb.com/tutorials/csv-to-table/))
- [ ] fix `object-fit` in Stuff
- [ ] Flickr APIs for embedded/integrated/automated galleries
	- use [FlickrEmbed](https://flickrembed.com/)
	- or use [Flickr APIs](https://www.flickr.com/services/api/)
	- or use [simpler embedding](https://help.flickr.com/en_us/share-or-embed-flickr-photos-or-albums-rJBx6mjyX)
- [ ] get rid of jQuery (it’s used just in one case and it’s not worth it: downloading it takes 1.5s ish of the website loading time)
- [ ] getting ready for a sudden blog posts increase
	- [ ] paginate
	- [ ] add more and more specific categories
- [ ] global search button
- [ ] neumorphism redesign
- [ ] Newsletter
	- [x] subscribe button
	- [ ] back-end implementation
	- [ ] Mailtrain || listmonk setup
- [ ] [Now page](https://sivers.org/now)
- [ ] `head` include (is this good for performance?)
- [ ] page image preview when sending link, see the [Open Graph Protocol](https://ogp.me/)
- [x] Poetry
	- [x] section
	- [x] custom styling
	- [ ] custom feed
- [ ] Post header
	- [ ] Post categories list
	- [x] Post date
- [ ] RSS Feeds management + Mailtrain automation
- [ ] share on [Jekyll showcase](https://github.com/planetjekyll/showcase)
- [ ] [Typography](https://xplosionmind.tk/typography)
	- [ ] final letter spacing, line height, etc.
	- [ ] [Custom font](https://xplosionmind.tk/Typography#Custom-font) implementation
- [ ] visioni
    - [ ] unsorted photos randomly moving
    - [ ] horizontal instead of vertical scrolling of the gallery
	- [ ] downloadable portfolio pdf

- [x] Animations (little and simple but effective)
	- [x] buttons: `x`s and menus (see tokyo-voice.jp or traxmag.com)
- [x] basic coloured biiig shapes
- [x] “blogroll”: a list of blogs which inspire me, see [Pawlean](https://pawlean.com/blogroll)
- [x] change mobile browser bar colour
- [x] custom selection colour for text
- [x] customise 404 page
- [x] Creative Commons (or, in general, a license) for every image of the site (one for every image or one specified) **FOOTER CC LICENSE**
- [x] categories description and link to stuff
- [x] cursor styling
- [x] final header configuration
- [x] gif instead of images 
- [x] Hover effects
- [x] `id` anchor links
- [x] inline code styling
- [x] input fields styling
- [x] language switch [x] `letter-spacing` and `word spacing` (it's nice as it is) [x] light/dark mode switch button (I'm deep and dark / I'm bright and shiny) [x] list of belonging categories at the top of the post page
- [x] Mobile optimisation
- [x] move `stuff extended` to `The Jar`
- [x] Privacy Policy
- [x] RSS Feed
- [x] separate website/repo/domain for web and online resources or for geek stuff in general (configured as _[The Jar](https://xplosionmind.tk/jar)_)
- [x] Serif font styling in posts
- [x] Share button in blog (custom version inspired by 
- [x] `stuff extended`
- [x] SVG buttons
- [x] [table of contents](https://github.com/allejo/jekyll-toc)




### CREATIVE IDEAS &&/|| EXPERIMENTS 

- DESKTOP: floating “categories” column on the right
- [Generative Art](http://tholman.com/post/generative-art-speedrun/)
	- always-changing colors, see Zander Martineau’s [website](https://zander.wtf/)
	- Explaination page
- everything center-aligned, also on desktop
- colour palettes improvement
