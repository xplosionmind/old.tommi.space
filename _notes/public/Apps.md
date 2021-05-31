---
date: 2020-05-06
updated: 2021-05-25T16:10:25.972109+02:00
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

## MacOS

Right now on my [MacBook Pro 13" 2019](https://support.apple.com/kb/SP799?locale=en_US&viewlocale=en_US "MacBook Pro 13\" 2019 tech specs"):

<ul>{% for app in macosapps %}<li><a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}</li>{% endfor %}</ul>

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

<ul>{% for app in androidapps %}<li>
			<a href="{{ app.url }}" target="_blank" title="{{ app.name }}{{ app.title }}">{{ app.name }}</a>, {{ app.description }}
		</li>
	{% endfor %}
</ul>

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

Apps which are not installed but it is worth remembering.

- [Andy Works](https://www.andy.works/works "Andy Works"): <q>not boring apps</q>. They are actually wonderful but in the end quite useless; the system default ones are okay.
- [ad-free](https://abertschi.github.io/ad-free/landing/ "ad-free website"), mute audio while audio ads are played (built to work with Spotify in particular)
- [Black Light](https://michelf.ca/projects/black-light/ "Black Light"), to add display color filters in MacOS
- [doing](https://github.com/ttscoff/doing "doing"), a CLI script to remember what you were doing
- [Hook](https://hookproductivity.com/ "Hook"), to link stuff in MacOS
- [World Scribe](https://github.com/MarquisLP/World-Scribe "World Scribe"), an Android app for fictional world-building 
- [OPAC App](https://opac.app/ "OPAC App"), Android app to access libraries catalogs around the world (not in use since the ones I frequent are not supported)
- [Timeline](http://thetimelineproj.sourceforge.net/ "Timeline"), a timeline manager, for Linux and Windows only
- [Timelines](https://timelines.app/ "Timelines App"), an iOS only app for time tracking. It is incredibly similar to my concept of [[Timeline development|Timeline]], but it has a pro subscription.
- [pass](https://www.passwordstore.org/ "pass - the standard unix password manager"), the standard Unix password manager
- [Knil](https://apps.apple.com/app/knil-universal-link-testing/id1195310358 "Knil on Apple App Store"), universal link testing
- [Regex](https://motionobj.com/regex/ "Regex"), to test Regex expressions. It costs 30€
- [WebApps](https://f-droid.org/it/packages/com.tobykurien.webapps/ "WebApps on F-Droid"), to containerize website pages and make them individual WebApps.