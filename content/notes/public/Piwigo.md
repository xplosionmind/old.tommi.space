---
date: 2021-12-17T10:55:25+01:00
updated: 2022-03-14T14:52:18+01:00
tags: geek
image: https://piwigo.org/plugins/piwigo-piwigodotorg/piwigo.org.svg
description: |
  Some notes about <a href='https://piwigo.org' target='_blank' title='Piwigo official website'>Piwigo</a>, a great solution for hosting and storing images. I use it on <a href='https://images.tommi.space' target='_blank' title='Tommi’s images'>images.tommi.space</a>.
---
{{ description }}

<br>
<br>

## The problem

Piwigo is wonderful and it has great potential. Nevertheless,  its problem is that it is [developed quite slowly](https://github.com/Piwigo/Piwigo/commits/master 'History of commits to Piwigo on GitHub') and by few people. Some parts of the interface are obsolete and very old looking, documentation is not straightforward and simple.

Fundamentally, it is not as popular as it deserves to be.

<br>
<br>

## Embedding

For the reasons pointed out above, even doing simple tasks as embedding have no default and simple solution.

### Images

1. My current way to embed images is through [PiwiShack](https://piwigo.org/ext/extension_view.php?eid=324 'PiwiShack description'), a plugin which displays in every image page a menu for different sharing options
2. An alternative would be embedding with the `download_by_size` API function: `https://images.tommi.space/plugins/download_by_size/action.php?id=16172&part=e&size=medium`

Useful info:
- [API settings](https://images.tommi.space/tools/ws.htm 'images.tommi.space API')
- [My post](https://piwigo.org/forum/viewtopic.php?id=31165 'Embedding images and galleries in HTML - Piwigo Forum') on Piwigo’s forum

<br>

### Galleries

Still looking for a solution.

<br>
<br>

## Notes

Some things I have to write here that I would forget otherwise

- Change **number of photos per page**:
	1. Go to user settings
	2. Change the value for <q>number of photos per page</q>

<br>
<br>

## Todo

- Configure collections
