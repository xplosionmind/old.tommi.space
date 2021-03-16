---
layout: vuoto
textonly: true
title: "Tommi's quick links"
permalink: /links
redirect_from: ["/linktree", "/quick-links", "/link-tree", "/quicklinks"]
image: "/images/profile.jpg"
---
<figure>
	<img src="{{ page.image }}" rel="me" title="A picture of Tommi" alt="A picture of Tommi" style="max-height:20vh;" />
</figure>

This is an ugly quick reference of links you might be interested in.

- [Tommi's personal website](https://tommi.space "Tommi Space")
- [Quit Social Media](https://quitsocialmedia.club "Quit Social Media")
- [Latest blog post]({%- for post in site.posts limit:1 -%}{{ post.url }} "{{ post.title }}"){%- endfor -%}
