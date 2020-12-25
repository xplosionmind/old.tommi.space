---
date: 2020-12-05
updated: 2020-12-23
tags: qsm, geek, wip
aliases: ["Quitting Flickr", "Quit Flickr"]
description: "Thoughts and decisions about quitting Flickr and switching to Piwigo"
image: "https://assets.tommi.space/images/jar/quit-flickr.jpg"
redirect_from: ["/flickr", "/piwigo", "/quitting-flickr", "/switch-to-piwigo", "/piwigo-switch"]
---
The process of quitting Flickr and switching to Piwigo took place between the 21<sup>st</sup> and 23<sup>rd</sup> December 2020
{:.box}

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

<br>
<br>

## Customizing Piwigo

1. Since importing photos from Flickr is very effective and most of the metadata is preserved, there's very little configuration to be done from the point of view of imported pictures.
2. Evaluate which plugins are useful and should be installed
3. Customize the CSS: for a greater ease of use, I created a stylesheet on <https://tommi.space/piwigo.css> which contains all of the rules I need, and I `@import` it in Piwigo's CSS.

<br>
<br>

Switching to Piwigo is one of the steps of the path to [[Internet Freedom]].