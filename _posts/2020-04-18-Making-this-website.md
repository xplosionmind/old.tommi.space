Building a website from scratch can be challenging. It took me several months of study, practice, tests and neverending headaches to get to this result. The process can be overwhelming (to me it definitely has been): there are tons of different tools, resouces and tutorials; nevertheless, it’s always **so hard** to spend the right amount of time learning something by evaluating its overall usefulness. Since the beginning, I chose to do **everything** by myself: I decided not to use any framework, <abbr title="Content Management System">CMS</a> or copy and paste any code I couldn’t understand.

I wanted to learn by doing and do it in the best possible way.

<br />

Yep, quite an ambitious purpose. Thus, in the end I decided to take advantage of a Static Site Generator, which doesn’t necessarily make things more complex but for sure it makes them simpler and **way quicker**. We’ll get there.

One last thing before diving in: this article is not intended a guide nor a tutorial. Since I’ve been struggling **a lot** to get here, I feel like it may be useful to someone to know the path I followed (or, better, traced) to obtain what I was aiming at. Not having any clue of the right next step is stessful, I’ve been on the edge of giving up multiple times.

Eventually, another point it’s worth making is that web develpement is **ridicolously cheap**: you just need a laptop (you don’t even need a powerful one), everything else is for **free** (actually, I bought a book, but online there are a few valid alternatives). The only, **huge** price you need to pay is **time**, a handful of restless hours fighting with the urgency and the desire of getting things done, and having paticence following gradual steps. 


## The Beginning

I had absolutely no idea where to start. My only notions of programming were some basic concepts of C, which I studied at University. I knew nothing about server management, HTML, CSS, JavaScript or web hosting. My previous website created on Wix with a drag-and-drop GUI to build anything.

So, the first question I asked myself was:

**where should I start?**

As of when I’m writing, `xplosionmind.tk` isn’t completed.

<br />
<br />
<br />

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
		- resetting links as `<a href="blablabla" rel="noopener" target=_"blank"`
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


## Resources

### useful websites

- [Tania Rascia](https://www.taniarascia.com/)’s blog, great for learning grasp the most important aspects of front-end web programming;
- brick.im
- http://webtypography.net/intro/


### specific articles

- [`em` vs `rem`](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984), choosing the right one to build a responsive website;
- <a href="https://www.sylvaindurand.org/making-jekyll-multilingual/" rel="noopener" target="_blank">Making Jekyll Multilingual</a> by Sylvain Durand
- <a href="https://gist.github.com/Eeemil/e93ad054a73037f5bea3#file-post-html" rel="noopener" target="_blank">edit on GitHub button</a>
