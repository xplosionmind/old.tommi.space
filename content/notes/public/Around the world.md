---
date: 2020-07-20T02:00:00+02:00
tags: places
aliases: Places
permalink: /places/
redirect_from: [/around-the-world/,/world-places/,/posti,/luoghi/]
description: Places I love around the world
image: https://tommi.space/places.jpg
main: true
toc: false
todo: loop through all the notes and posts from that location
updated: 2022-03-14T15:01:59+01:00
---
<cite>[Around the World](https://youtube.com/watch?v=a9eNQZbjpJk 'Red Hot Chili Peppers - Around The World')</cite> is a song that I love by Red Hot Chili Peppers. It talks about the beauty of all the different and astounding places around the world. This is not merely a list of places I have been to in my life, but an ever growing and evolving record of the ones I carry in my heart.

<div class='embed-container'><iframe width='100%' height='300px' frameborder='0' allowfullscreen src='//umap.openstreetmap.fr/en/map/favorites_593427?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false'></iframe></div>

<br>
<br>

<ul>{% for place in places %}<li>{% if place.url != '' %}<a href='{{ place.url }}' title='{{ place.name }}'>{{ place.name }}</a>{% else %}{{ place.name }}{% endif %}, {{ place.city }}</li>{% endfor %}</ul>

<br>
<br>

## Resources

- [The Treasure Map](https://the-treasure-map.herokuapp.com 'The Treasure Map')
- [Atlas Obscura](https://www.atlasobscura.com 'Atlas Obscura')

<br>
<br>

<div class='embed-container'><iframe src='https://www.youtube-nocookie.com/embed/a9eNQZbjpJk' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>

<br>
<br>

More info on how I manage my location data in the [[OpenStreetMap]] page, while in [[Travel|Travelling]] I collect some notes of useful resources and tips.
