---
date: 2020-12-05
updated: 2021-04-13T14:46:12.845281+02:00
tags: geek
aliases: ["Quitting Flickr", "Quit Flickr"]
description: "Thoughts and decisions about quitting Flickr and switching to Piwigo"
image: "/images/jar/quit-flickr.jpg"
redirect_from: ["/flickr", "/piwigo", "/quitting-flickr", "/switch-to-piwigo", "/piwigo-switch"]
---
<div class="blue box">
	The process of quitting Flickr and switching to Piwigo took place between the 21<sup>st</sup> and 23<sup>rd</sup> December 2020, and it took me until the Q1 of 2021 to completely configure the gallery and optimize the workflow, for good
</div>

## Why

Why quitting [Flickr](https://www.flickr.com "Flickr") and choosing [Piwigo](http://piwigo.org "Piwigo") instead:

- Flickr is hosted on Amazon's servers
- Piwigo is open source and ethical, while Flickr is not very privacy and user friendly.
- Piwigo [costs (**only**!) 39€](https://piwigo.com/pricing "Piwigo pricing page") per year (and 94€/3y), while [Flickr's price](https://help.flickr.com/pricing-faq-r1qHsTEbU "Flickr Pricing FAQ") is changing too often, it has risen considerably over the last few years; right now it's 65,88€ per year.
- Flickr was founded in Canada and now it's based in the US, while Piwigo was founded and it's based in France. It's not that what's in the US is bad; but since the vast majority of the most common web services is American, using an European based service not only is nice, but it gives me a sense of being somewhat closer
- since Flickr was the precursor of Instagram, it still has most of the “social” features which now can be found on every other platform; for this reason, the social activity and interaction among users has dropped considerably in the last decade, making it quite useless. Piwigo, is focused on storage, speed and durability, and its features aren't influenced by too much need for engagement.

<br>
<br>

## Making the switch

1. Start the 30 days free trial of Piwigo
2. Install [Flickr2Piwigo](https://piwigo.org/ext/extension_view.php?eid=612 "Flickr2Piwigo plugin page") plugin and follow [this guide](https://piwigo.com/blog/2013/05/21/import-from-flickr-to-piwigo2/ "Import from Flickr to Piwigo - Piwigo blog") to import all of the pictures which are stored on Flickr.
	1. What is not noted in the blog post is that <u>the process is sloooow but stable</u>, even though it's better than I expected; on Flickr I had 17452 photos and it took me ~18 hours to import two thirds of them.
	2. After this, the process got stuck and I believe it was because the server was too stressed. So, I stopped for a few hours.
	3. For several days I attempted to continue the import, but there are the last ~1000 pictures which are mysteriously stuck and I couldn't find any way to import them through the plugin. I opened [an issue](https://github.com/mistic100/Flickr2Piwigo/issues/58 "“Import stuck”, issue in Flickr2Piwigo repository on GitHub") about this

<br>
<br>

## Setting up Piwigo

<div class="red box">
	There are some very important features which are missing in Piwigo. I track them <a href="/bugs#piwigo" title="Piwigo bugs and feature requests">here</a>
</div>

1. Since importing photos from Flickr is very effective and most of the metadata is preserved, there is almost no configuration to be done, for what concerns the pictures.
	1. For some reason, the albums' cover images do not always correspond, so they must be updated.
	1. I imported a lot of tags, which are meaningful in Flickr to improve SEO and public posts popularity, but in Piwigo they should have a practical focus. I deleted most of them and I kept the essential meaningful ones
1. Evaluate which plugins are **actually** useful and which should be installed.
2. **Customizing the CSS**: for a greater ease of use, I created a stylesheet hosted on <https://tommi.space/piwigo.css> which contains all of the rules I need, and I `@import` it in Piwigo's CSS. I customized everything on top on the dark version of the default theme, by making it match this website's design.
3. Setting a **custom domain**: there is no option to do it automatically from the settings, so I sent an email to Piwigo support in order to make <https://tommi.piwigo.com> match <https://images.tommi.space>, then, from my DNS records, I created several CNAMEs such as <https://visions.tommi.space> or <https://gallery.tommi.space>, and they all point to the domain I wrote in the email
1. Improve private albums sharing
2. Read Piwigo privacy policy to check reliability for private pictures

<br>
<br>

## Embed image

```url
https://images.tommi.space/plugins/download_by_size/action.php?id=16172&part=e&size=medium
```

- [API settings](https://images.tommi.space/tools/ws.htm "images.tommi.space API")
- [Piwigo Forum post](https://piwigo.org/forum/viewtopic.php?id=31165 "Embedding images and galleries in HTML - Piwigo Forum")

<br>
<br>

## Feature requests

- ~~One thing I'm still trying to figure out is how to make more pictures appear for a gallery page. They are too few and it's really complicated to modify the size of the thumbnail to make them look nice~~. ✅ 2021.01.07 it is sufficient to go in the settings page of the user in question and change the value of “number of photos per page”
- ~~Implement ***Collections***, as in Flickr~~ ✅ this can be done by creating an album which contains little ones

<br>

### Flickr2Piwigo

[Flickr2Piwigo](https://piwigo.org/ext/extension_view.php?eid=612 "Flickr2Piwigo in Piwigo Extensions Marketplace") is a plugin to [[Piwigo|import pictures from Flickr]].

- Import album descriptions
- Import Collections as parent albums

<br>
<br>

## Bugs

- [ShareAlbum plugin](https://github.com/petitssuisses/piwigo-ShareAlbum/ "piwigo-ShareAlbum on GitHub"): [`You are not authorized to access the requested page`](https://github.com/petitssuisses/piwigo-ShareAlbum/issues/71 "Issue &num;71 on GitHub")

<br>
<br>

Switching to Piwigo is one of the steps my path to [[Internet Freedom]].