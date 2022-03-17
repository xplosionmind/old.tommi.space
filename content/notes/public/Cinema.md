---
date: 2020-06-10T02:00:00+02:00
updated: 2021-12-30T20:11:12+01:00
tags: cinema
aliases: Movies
description: After watching these movies and series, I was not the same anymore.
redirect_from: [/movies, /film, /films]
image: https://www.lascimmiapensa.com/wp-content/uploads/2020/03/597c9296ed82967974a455aef591ecfc.jpg
main: true
toc: false
---
<p lang='it'>Il mio concetto di cinema può essere a sommi capi rappsesentato da ciò che è per me [[Woody Allen]].</p>

<br>
<br>

## Favorites

A temporary list of my favorite movies, even though [[Moviewyrm|I am working on a better solution]].

{% assign favorites = watchlog | where: 'favorite', '1' | sort: 'name' %}

<ul class='two'>{% for fav in favorites %}<li><cite><a href='https://imdb.com/title/{{ fav.imdb }}' target='_blank' title='“{{ fav.title }}„ on IMDb'>{{ fav.title }}</a></cite></li>{% endfor %}</ul>

<br>

### <cite lang='it'>Santa Maradona</cite>

<p lang='it'>Santa Maradona è il mio film preferito.<br>
Tutto il mio amore per questo film è concentrato in *[[Santa Maradona]]*</p>

<br>
<br>

## Resources

Streaming movies and TV series

- [perestroika.it](https://perestroika.it 'Perestroika'), to stream Russian movies with Italian subtitles
- [Scaricare film, come si deve](/scaricare-film 'Scaricare film, come si deve'), una mia guida in italiano per scaricare film tramite torrent

<br>
<br>

## Watchlist

Movies I intend to watch are logged in [[Watchlist|my Watchlist]].

<br>
<br>

## Watchlog

Movies I watched are logged in [[Watchlog]].
