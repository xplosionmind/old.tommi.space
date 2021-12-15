---
tags: geek zen
---
If I think carefully, I may actually conclude that the main issue with my life is that I spend most of the time thinking about how to waste less time. I am kind of trapped in the loop [Leo Babauta](https://zenhabits.net "Zen Habits") refers to in his wonderful [*A Case Against Optimizing Your Life*](https://zenhabits.net/unoptimizing/ "Unoptimizing - Leo Babauta"): by focusing on **how** to improve my life, I lose sight of **actually improving** it, or even [living it](/living "Living"), which is the whole point of life.

So, each time I stumble upon great new ways of thinking, different approaches to knowledge, fresh and smart ways to organize it, I punctually fear that I will get so interested in the new “system” that I may overlook what is actually important.  
This is bad, and it is the symptom of a broader problem, which is how I relate with the world and how I learn things it gifts me with.

After this long premise to frame the context of this article and my feelings prior to its conclusion, I will get to the point.

I believe the most relevant problem, which makes everything else harder, if not impossible, is the case of **knowledge management**. I have [a dedicated item](/knowledge "Knowlegde") in [*The Jam*](/jam "The Jam") containing a few insights about the topic, to which up to now I did not pay much attention. Now, it is time to start using a great, brilliant system: **Zettelkasten**. More on the system later, let’s focus of my current note-taking workflow, my necessities and my purpose.

<div class="box">
note: I am writing this post <i>while</i> performing the transition, so what I am keeping note of is helpful also to me, in order to understand my actual needs and scopes.
</div>

<br>
<br>

## My first system

Up to few years ago, I managed everything via [Google Keep](https://keep.google.com "Google Keep"): I did not have much to organize and I did not care much about valuing the connections and the deep relations in my thoughts; I was only 17 or so. Over time, I got aware of how Google manages user data, the poor ethics of its services, the danger that monopolies represent for our society, and [a lot of other problems](/degoogle "DeGoogle"). These motives led me to make my first change of system.

<br>
<br>

## My precedent system

After dropping Google Keep, I switched to [Joplin](https://joplinapp.org "Joplin"), a wonderful open source note taking app which is growing more and more famous everyday.

In the meanwhile, I started university, and I had to take notes more seriously and find or develop a future-proof database system to maximize proficiency and uniformity. Unable to find the *perfect* solution that could completely satisfy me, I went by simply creating a markdown file for every new class, with the format `YYYY-MM-DD.md`, each in a folder with the course name, and editing everything with [Zettlr](https://zettlr.com "Zettlr") or [Vim](https://vim.org "Vim").

On top of note-taking, I recently redesigned my website, whose pages are all stored in plain markdown files on my computer (I use [Jekyll](https://jekyllrb.com "Jekyll") as a [static site generator](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/ "What is a Static Site Generator? And 3 ways to find the best one")) and I have never been very happy that I could not integrate private Joplin content with [*The Jam*](/jam "The Jam") content; furthermore, there were some limits to Joplin that made me doubt about sticking with it.

These dissatisfactions kept me skeptic about the durability and effectiveness of this system, and, while in love with the system I used and their philosophy, I could not help but thinking there might be a better solution.

Eventually, I figured it out.

<br>
<br>

## My needs

Before diving-in the Zettelkasten switch process, allow me to point out my needs:

1. **Durability**: as I stated at the beginning, I spend too much time optimizing my systems, and I need to stop doing that; I need a solution which <u>works in the long term and adapts to my evolving necessities</u>, without allowing me to feel like it is not enough.
1. **Organicity**: there are different topics belonging to different folders where I need to access content, and I would love for them to be integrated. For instance, if there is a topic that I am studying which reminds me of something I published on my website or of something which I wrote down on my private notebook, I want to <u>be able to link them</u>.
1. **Portability**: I need to <u>access to everything everywhere, anytime</u>. (actually, accessing stuff from my phone and my computer would be enough, but logging to cloud.tommi.space from any device and editing something on the go would not be bad)
1. **Privacy**: ideally, I need to have <u>in the same place</u> both private and public notes.
1. **Compatibility**: Jekyll uses Kramdown, Zettlr uses mainly Pandoc, and it is not clear what Joplin uses: there are a ton of flavors of Markdown, and even more rendering engines. I want to be able to <u>make use of the same features everywhere</u>; I may just adapt to the CommonMark standard, but it lacks features which are very important to me, such as the ability to add classes to any paragraph without using HTML, which, among the ones listed before, only Kramdown has.
1. **Conversion**: let’s be honest: I can say Markdown is simple and wonderful as much as I want, but, outside the geeks circle, almost nobody knows it. I want to be able to <u>quickly convert any of my notes</u>, mainly in `.pdf`, `.docx`, `.odt` and `.html`; I can do this with Pandoc, of course, but I want it to be <u>as painless and seamless as possible</u>.
1. **Versatility**: from this point of view, I am very demanding. My aim is to come up with a method capable of including different content formats on different devices: I would love to be able to link notes I write by pen on my notebook, as well as voice notes recorded on my phone, and be able to reference them in my markdown files.
1. **Simplicity**: if I need to share some content with somebody, or to suggest my system to a friend, it has to be <u>powerful and complete, yet simple and easy</u> to understand.
1. **Metadata**   
Metadata, such as date and time of creation and of modification, must be clear, accessible, and impossible to lose. Many of my notes are valuable to me because they are memories and they become insignificant if I have no idea when they were written.
1. **Multiple languages**: I often use both English and Italian (my mother language), and in the future I may start writing also in other languages. I desire an effective way to both <u>handle and link content in different languages</u>.
1. **Reminders**: one feature which made me stick with Google Keep before and Joplin later is the ability to <u>set reminders and send push notifications</u> on the smartphone at a given time. This is a critical need for me, and it should be on top, but since my reminders are not strictly related to my notes’ content, I can use a different app focused on reminders only if the above conditions are satisfied.

Furthermore, I need to work on **a fallback system**, so that if for some problem due to a bug or any type of disservice, I can still be able to at least take notes, if I need to.

<br>
<br>

## The Zettelkasten approach

The system which checks most if not all of the boxes is [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten "Zettelkasten on Wikipedia"), the great method invented and used by the genius of [Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann "Niklas Luhmann"). I will not focus on what it is and how it works, there are several great explanations which I listed in [the Zettelkasten Jam item](/zettelkasten).

### Drawbacks

- It’s hard to abandon the beloved and evergreen **folder structure**:   
for Zettelkasten to be effective, you need to loosen the rigid structure used by folders. A better explanation of why and how is in [this medium post](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6)
- Zettelkasten [**can be dangerous**](https://medium.com/@nickmilo22/my-pkm-story-3763985b7a3e) and counter-productive:   
you have to manage your knowlegde in the right way, which is not the *only* way. If you don't care about the effectiveness of your system and filling it with random stuff, it may blow up.

First of all, let’s point out that the best app created up to now with a specific focus on Zettelkasten is [Obsidian](https://obsidian.md). It’s very recent and it has a few controversies, especially about the fact that it’s independently developed but not open source, but most importantly that is uses a propietary formatting and reference system using `[[` and `]]` as internal links delimiters. Nevertheless, we are focusing on the system, not the app. With a few adaptations, the software may also change, in the future.

### Moving out of previous systems

1. Exporting a folder with all of Joplin's markdown files (unfortunately, files aren't exported with any front matter or metadata)


<br>

### What is wrong with Zettelkasten

Zettelkasten is great, but it has limits.  
I have been using the Zettelkasten method for several months now, and I love it. Unfortunately, nevertheless, I feel it lacks something I cannot fully grasp. I have the sensation that it is strictly limited to me, bounded to the website and the place where it lives. Yes, it has hyperlinks, yes it is open source and easily accessible, but while it is optimal for interlinking ideas and concepts, such ecosystem is super connected within itself but it is quite impossible to make it dialog with the outside –in my case, tommi.space.

Probably, it is me who, in this pandemic time, is constantly thinkering about optimization and improvement of tools I use to make them better, and this is ruining my life, I cannot deply tackle the content of what I envision, i rather struggle in defining perfect, eternal, seamless, and neat solution to perform them.

The thing is that anything I write in The Jam has probably been already written somewhere else and either I am reformulating it, or I am unaware that that concept already exist or has been thought by somebody else who published it. While the latter is a natural consequence of being human and limited, the former can be useful for me to learn by repeating, but is such redundancy actually effective?
