---
tags: ["geek", "zen"]
---
If I think carefully, I may actually conclude that the main issue with my life is that I spend most of the time thinking about how to waste less time. I'm kind of trapped in the loop [Leo Babauta](https://zenhabits.net) explains in his wonderful [*A Case Against Optimizing Your Life*](https://zenhabits.net/unoptimizing/): by focusing on **how** to improve my life, I lose sight of **actually improving** it, or even living it, which is the whole point of life.

So, each time I stumble upon great new ways of thinking, different approaches to knowledge, fresh and smart ways to organize it, I punctually fear that I'll get so interested in the new “system” that I may overlook what's actually important.

This is bad, and it is the symptom of a broader problem, which is how I relate with the world and how I learn things it gifts me with.

So, after this long premise to frame the context of this article and my feelings prior to its conclusion, let's get to the point.

I believe the most relevant problem, which makes everything else harder, if not impossible, is the case of **knowledge management**. I have [a dedicated item in *The Jam*](/knowledge) containing a few insights about the topic, to which up to now I didn't pay much attention. Now, it's time to start using a great, brilliant system: **Zettelkasten**. More on the system later, let's focus of my current note-taking workflow, my necessities and my purpose.

note: I'm writing this post *while* performing the transition, so what I'm writing is helpful also to me, helping me understand my detailed needs and scopes.
{:.box}

## My old original system

Up to few years ago, I managed everything via [Google Keep](https://keep.google.com), and I didn't have much to organize… I was only 17 or so. Over time, I got aware of how Google manages user data, the poor ethics of its services, etc. So, I made my first switch.

<br />

## My current system

I switched to [Joplin](https://joplinapp.org) after dropping Google Keep.

In the meanwhile, I started university, and I had to take notes more seriously and find or develop a future-proof database system to maximize proficiency and uniformity. Unable to find the *perfect* solution that could completely satisfy me, I went by simply creating a markdown file for every new class, with the format `YYYY-MMM-DD.md`, each in a folder with the course name, and editing everything with [Zettlr](https://zettlr.com) or [Vim](https://vim.org).

On top of note-taking, I recently redesigned my website, whose pages are all stored in plain markdown on my computer (I use [Jekyll](https://jekyllrb.com) as a [static site generator](https://staticgen.com)) and I've never been very happy that I couldn't integrate private Joplin content with [The Jam](/jam) content.

These dissatisfactions kept me skeptic about the durability and effectiveness of this system, and, while in love with the system I used and their philosophy, I couldn't help but thinking there might be a better solution.

Eventually, I figured it out.

## My needs

Before diving-in the Zettelkasten switch process, allow me to point out my needs:

1. **Durability**   
as I stated at the beginning, I spend too much time optimizing my systems, and I need to stop doing that; I need a solution which works in the long term and adapts to my evolving necessities, without allowing me to feel like it's not enough.
1. **Organicity**   
there are different folders where I need to access content, and I'd love for them to be integrated: if there's a topic that I'm studying which reminds me of a content on my website or of something which I wrote down on my private notebook, I want to be able to link them.
1. **Portability**    
I need to access to everything everywhere, anytime. (actually, accessing stuff from my phone and my computer is enough)
1. **Privacy**   
ideally, I need to have in the same place both private and public notes.
1. **Compatibility**   
Jekyll uses Kramdown, Zettlr uses mainly Pandoc, and it isn't clear what Joplin uses: there are a ton of flavors of Markdown, and even more rendering engines. I want to be able to use the same features everywhere; I may just adapt to the CommonMark standard, but it lacks features which are very important to me, such as the ability to add classes to any tag, which, among the ones listed before, only Kramdown has.
1. **Conversion**   
let's be honest: I can say Markdown is simple and wonderful as much as I want, but almost nobody knows it outside the geeks circle. I want to be able to quickly and neatly convert any of my notes, mainly in `.pdf`, `.docx`, `.odt` and `.html`; I can do this with Pandoc, of course, but I want it to be as painless and seamless as possible.
1. **Versatility**  
from this point of view, I'm very demanding. My aim is to come up with a method to include in my Zettelkasten different content formats on different devices: I'd love to be able to link notes I write by pen on my notebook, as well as voice notes recorded on my phone, and be able to reference them seamlessly in my markdown files.
1. **Simplicity**   
if I need to share some content with somebody, or to suggest my system to a friend, it has to be powerful and complete, yet simple and easy to understand.
1. **Metadata**   
Metadata, such as date and time of creation and of modification, must be clear, accessible, and impossible to lose. Many of my notes are important to me as memories and they have a huge value in relation with their date of creation.
1. **Multiple languages**   
I often use both English and Italian (my mother language), and in the future I may add more. I desire an effective way to both handle and link content in different languages.
1. **Reminders**   
one feature which made me stick with Google Keep before and Joplin later is the ability to set reminders and send push notifications on the smartphone at a given time. This is a crucial need to me, and it should be on top, but since my reminders aren't strictly related to my notes' content, I can use a different app focused on reminders only if the above condition are satisfied.

Furthermore, I need to work on **a fallback system**, so that if for some problem due to a bug or any type of disservice, I can still be able to at least take notes, if I need to.

<br>

## The Zettelkasten approach

Here we are. Now it's time to switch to [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten), the great method invented and used by that genius of [Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann). I won't focus on what it is and how it works, there are several great explanations which I listed in [the Zettelkasten Jam item](/zettelkasten).

### Drawbacks

- It's hard to abandon the beloved and evergreen **folder structure**:   
for Zettelkasten to be effective, you need to loosen the rigid structure used by folders. A better explanation of why and how is in [this medium post](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6)
- Zettelkasten [**can be dangerous**](https://medium.com/@nickmilo22/my-pkm-story-3763985b7a3e) and counter-productive:   
you have to manage your knowlegde in the right way, which is not the *only* way. If you don't care about the effectiveness of your system and filling it with random stuff, it may blow up.

First of all, let's point out that the best app created up to now with a specific focus on Zettelkasten is [Obsidian](https://obsidian.md). It's very recent and it has a few controversies, especially about the fact that it's independently developed but not open source, but most importantly that is uses a propietary formatting and reference system using `[[` and `]]` as internal links delimiters. Nevertheless, we're focusing on the system, not the app. With a few adaptations, the software may also change, in the future.

### Moving out of previous systems

1. Exporting a folder with all of Joplin's markdown files (unfortunately, files aren't exported with any front matter or metadata)
