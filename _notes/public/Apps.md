---
date: 2020-05-06
tags: geek/apps
aliases: ["Software", "Digital Tools"]
image: "/images/apps.png"
description: "A comprehensive list of apps I use + interesting apps I have to keep record of."
redirect_from: ["/uses", "/installed", "/installed-apps", "/applications", "/applicazioni", "/programs", "/programmi", "/software", "/ios-apps", "/iphone", "/iphone-apps", "/ios", "/macos-apps", "/mac-apps", "/macos", "/macbook", "/macbook-pro", "/macbookpro", "/tommis-mac", "/tommis-macbook", "/tommis-macbook-pro", "/tommismacbookpro"]
todo:
  - 'use awk and pandoc to convert descriptions to HTML'
  - 'separate uninstalled apps'
  - 'print price'
  - 'print whether the app is open source or not'
---
{% assign macosapps = site.data.apps | where: "os", "MacOS" | sort: 'name' %}
{% assign androidapps = site.data.apps | where: "os", "Android" | sort: 'name' %}
{% assign iosapps = site.data.apps | where: "os", "iOS" | sort: 'name' %}
{% assign terminalapps = site.data.apps | where: "os", "terminal" | sort: 'name' %}
{% assign linuxapps = site.data.apps | where: "os", "Linux" | sort: 'name' %}
{% assign remember = site.data.apps | where: "remember", "1" | sort: 'name' %}

## MacOS

Right now on my [MacBook Pro 13" 2019](https://support.apple.com/kb/SP799?locale=en_US&viewlocale=en_US "MacBook Pro 13\" 2019 tech specs"):

<ul>{% for app in macosapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

<br>

### Terminal

<ul>{% for app in terminalapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

<br>
<br>

## iOS

Apps installed on my [iPhone 12 mini](https://www.apple.com/it/iphone-12/ "iPhone 12"):

<ul>{% for app in iosapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

<br>
<br>

## Android

Apps installed on my [OnePlus 6T](https://www.oneplus.com/6t "OnePlus &T") running ~~[Oxygen OS](https://www.oneplus.com/oxygenos "OxygenOS on OnePlus’ website")~~ [[Switch to LineageOS|LineageOS]].

<div class='yellow box'>
	<h3>Note</h3>
	My main phone is now an iPhone 12 mini. My OnePlus 6T comfortably sits in a drawer sadly I will not be opening for a while.
</div>

<ul>{% for app in androidapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

<br>
<br>

## Linuxplosion

Apps which I have installed on my beloved [[Linuxplosion]].

<ul>{% for app in linuxapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

<br>
<br>

## Server

The services I self-hosted which are running on my server can be found in the [[Server]] Jam ingredient.

<div class="blue box">
	Although I literally <b>love</b> some of the apps I installed on my devices, there are some [[Missing digital tools]] that I keep note of, in case someone with more programming expertise than me may be able to develop.
</div>

<br>
<br>

## Awesome Software

Lists with a ton of apps which are too valuable to be forgotten

- [awesome-macOS](https://github.com/iCHAIT/awesome-macOS)
- [awesome-command-line-apps](https://github.com/herrbischoff/awesome-command-line-apps)
- [awesome-macos-command-line](https://github.com/herrbischoff/awesome-macos-command-line)
- [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps)

<br>
<br>

## Worth remembering

Apps which are not installed but it is worth remembering or testing in the future.

<ul>{% for app in remember %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>