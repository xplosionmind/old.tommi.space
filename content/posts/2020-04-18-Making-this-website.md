---
date: 2020-04-18
tags: geek, draft
image: /2020-04-18-making-this-website.jpg
lang: en
permalink: /the-making-of/
redirect-from: ['/making-this-website/', '/themakingof/']
ref: genesi
---
Building a website from scratch can be challenging. It took me several months of study, practice, tests and neverending headaches to get to this result. The process can be overwhelming (to me it definitely has been): there are tons of different tools, resouces and tutorials; nevertheless, it’s always **so hard** to spend the right amount of time learning something by evaluating its overall usefulness. Since the beginning, I chose to do **everything** by myself: I decided not to use any framework, <abbr title='Content Management System'>CMS</abbr> or copy and paste any code I couldn’t understand.

I wanted to learn by doing and **do it in the best possible way**.

<br>

Yep, quite an ambitious purpose. Thus, in the end I decided to take advantage of a <a href='https://www.staticgen.com/about' target='_blank'>Static Site Generator</a>, which doesn’t necessarily make things heavier but for sure it makes them simpler and **way quicker**. We’ll get there.

One last thing before diving in: this article is not intended to be a guide or a tutorial. Since I’ve been struggling **a lot** to get here, I feel like it may be useful to someone to know the path I followed (or, better, traced) to obtain what I was aiming at. Not having any clue of the right next step is **so** stressful, I’ve been on the edge of giving up multiple times.

Eventually, another point it’s worth making is that web develpement is **ridicolously cheap**: you just need a laptop (not even a powerful one), everything else is for **free** (actually, I bought <a href='http://www.htmlandcssbook.com/' target='_blank'>this book</a>, but online there are a few great alternatives). The only, **huge** price you need to pay is **time**. I spent handful of restless hours fighting with the urgency and the desire of getting things done, and trying to have paticence of going on by gradual steps. 

<br>
<br>

## The Beginning

I had absolutely no idea where to start. My only notions of programming were some basic concepts of C, which I studied at University. I knew nothing about server management, HTML, CSS, JavaScript or web hosting. My <a href='https://web.archive.org/web/20210101144927/https://xplosionmind.wixsite.com/xplosionmind' target='_blank' title='xplosionmind on Wix'>previous website</a> was created on <a href='https://wix.com' target='_blank' title='Wix'>Wix</a> with a drag-and-drop <abbr title='Graphical User Interface'>GUI</abbr> to build anything.

So, the first question I asked myself was:

**where should I start?**

As of when I’m writing, `xplosionmind.tk` isn’t completed. The following steps are part of a bullet-list which I enhanced and completed before publishing.

Since I spent my whole COVID-19 quarantine (two months ish) doing this, I'm gonna add the git commit date of each step at the beginning.

<br>
<br>

## Learning HTML and CSS

As I wrote before, since I was so lost and I had no idea of the best starting point, I bought a book on basic web programming: “HTML and CSS” by Jon Duckett. I spent ten days reading and studying it thoroughly. After that, I knew all the basics, then I was able to start building a test page.

<br>
<br>

## Building

I chose the about page to be my test page. At first, it wasn't a section of the homepage, but a standalone one. I struggled to make it look like the one on the Wix website (I won’t link it anymore, you can browse around using the first one I gave) and I couldn’t make it appear nicely, until I discovered the `object-fit` CSS property, which changed my game.

To be honest, even after finishing the book I knew nothing about <a href='https://en.wikipedia.org/wiki/Web_framework' target='_blank'>frameworks</a> but after reading <a href='https://www.taniarascia.com/you-dont-need-a-framework/' target='_blank'>this article</a> I told myself I wouldn't need one. Even after completing the website, I still don't know if I made the right choice. Without a doubt, <a href='https://github.com/xplosionmind/xplosionmind/blob/master/style.css' target='_blank'>my <code>style.css</code></a> file is a huge mess. Nevertheless, I get things done pretty easily by searching classes' names in the file and I have only a stylesheet, so it’s good.

<br>
<br>

## Navigation bar, Header and footer

I decided to use the `include` php function to have only a header and a footer file. 

## STEPS

- learning HTML and CSS from the book
- creating a test page
- building a custom framework (you don’t need a framework Tania Rascia)
	- using php to include header and footer
- creating a responsive header
	- logo writing
	- JS code for dropdown menus
	- hover color transitions
- creating a responsive footer
	- inserting the license
	- inserting the subscribe input and styling it
	- creating my own custom yellow social svg buttons
- implementing Jekyll
	- Giraffe Academy tutorials + documentation
	- converting php includes to Jejyll YAML front matter includes
	- importing all of my older posts (it took me quite some time...)
		- fetching, resizing and resampling post pictures
		- resetting links as `<a href='blablabla' target=_'blank'`
- blog landing page
	- looping through categories
	- posts language switch
	- **cool yellow lines**
- STUFF
	- setting the `featured` and `current` variable, respectively to show on homepage and to divide between older and younger
	- logos converting to svg
	- images to fit
- multilingual
	- translating pages and using front matter to define `ref` and `lang`
	- translating footer and header
- Everyone page
- added _The Jar_
- 2020.05.16 theme toggle
- added _stuff extended_
- added _Radioimmaginaria database_


## Resources

### useful websites

- [Tania Rascia](https://www.taniarascia.com/)’s blog, great for learning grasp the most important aspects of front-end web programming;
- brick.im
- http://webtypography.net/intro/


### specific articles

- [`em` vs `rem`](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984), choosing the right one to build a responsive website;
- <a href='https://www.sylvaindurand.org/making-jekyll-multilingual/' target='_blank'>Making Jekyll Multilingual</a> by Sylvain Durand
- <a href='https://gist.github.com/Eeemil/e93ad054a73037f5bea3#file-post-html' target='_blank'>edit on GitHub button</a>
- about [Internet Freedom](/internet-freedom)
