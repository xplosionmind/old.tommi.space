---
date: 2020-09-09
updated: 2021-04-10T11:44:52+02:00
description: Books I own and books I would love to read and/or have
tags: reading
redirect_from: [/library,/libreria,/libri,/bookshelf,/bookshelves]
image: https://images.tommi.space/i?/uploads/j/b/u/jbuqxznr00//2021/01/15/20210115120147-9340ca01-me.jpg
main: true
todo:
  - integrate with <a href='https://bookwyrm.social' target='_blank' title='Bookwyrm'>Bookwyrm</a>
  - updated picture of Gianna
---
<style>
	li {
		margin-bottom: 0;
	}
</style>

<br>
<br>

## Library

<div class='library'>
{% for book in library %}
{% unless book.location == 'given away' or book.location == 'sold' or book.location contains 'gift' %}
{% if book.isbn %}
<a href='https://openlibrary.org/isbn/{{ book.isbn }}' title='{{ book.title }} in the Open Library'>
<img src='https://covers.openlibrary.org/b/isbn/{{ book.isbn }}-M.jpg?default=false' alt='{{ book.title }}' title='{{ book.title }}'>
{% else %}
<a href='javascript:void(0)' title='{{ book.title }}'>
<div><b>{{ book.author }}</b> - <cite>{{ book.title }}</cite></div>
{% endif %}
</a>
{% endunless %}
{% endfor %}
</div>

<br>
<br>

## Notes

All of my public notes on what I read

<ul class='two'>{% for note in collections.jam %}{% for tag in note.data.tags %}
{% capture booktag %}{{ tag | replace: '/', ' ' }}{% endcapture %}
{% if booktag contains 'book' %}<li lang='{{ note.data.lang }}'><cite><a href='{{ note.url }}' hreflang='{{ note.data.lang }}' title='{{ note.data.title }}'>{{ note.data.title }}</a></cite></li>{% endif %}{% endfor %}{% endfor %}</ul>

<br>
<br>

## Wishlist

<div class='yellow box'>
<h4>Note</h4>
If you got here from the <a href='/wishlist' title='My Wishlist'>Wishlist</a>, please consider that most of the books below are merely readings I'm interested in and not <strong>books I actually need</strong>. Write me if you intend to gift me with a book (thanks for the idea ❤️)
</div>


<ul class='two'>{% for book in books-wishlist %}<li>{% if book.author %}{{ book.author }} – {% endif %}<cite>{{ book.title }}</cite></li>{% endfor %}</ul>