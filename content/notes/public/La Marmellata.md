---
date: 2020-02-01
updated: 2021-06-11T06:39:42+02:00
tags: meta
permalink: /marmellata/
redirect_from:
  - /it/jar/
  - /jar/it/
  - /note/
  - /appunti/
  - /jar-it/
lang: it
ref: jam
toc: false
layout: page
image: /jam.png
---
Sul web viene comunemente chiamato <cite lang='en'><a href='https://dev.to/jbranchaud/the-digital-garden-l10' hreflang='en' title='The Digital Garden su DEV.to'>Digital Garden</a></cite>, oppure può essere definito come <em>sistema <a lang='de' href='/zettelkasten' hreflang='en' title='Zettelkasten — tommi.space'>Zettelkasten</a></em>. La mia, invece, è molto neno altisonante, ma più frullata e gustosa: si tratta di una <cite>Marmellata</cite>.

Ci sono curiose scoperte e piccoli pensieri che voglio salvare prima che finiscano nel dimenticatoio, o nell’attesa che vengano riformulati in maniera migliore e raccontati ne Lo <cite>[Zibaldone](/zibaldone)</cite>.

Prendo tutte queste cose e ne faccio una <cite>Marmellata</cite>.

Da questa pagina è possibile partire per navigare all'interno della Marmellata. Ci sono diversi modi per farlo:
- per tematica o argomento, scegliendo un tag
- partendo da una delle macro-note elencate di seguito e proseguendo verso altre note sempre più ramificate.

<p>Ogni elemento della Marmellata è connesso ad un altro: in fondo ad ogni nota, fra i <em lang='en'><a href='#backlinks' title='I backlink di questa nota'>backlink</a></em> sono elencate tutte le pagine in cui la nota corrente è stata menzionata.</p>

{% render tags.html, site: site -%}

<div class='row'>
	<div class='half column'>
		{% render lang-filter.html, lang: lang -%}
	</div>
	<div class='half column flex'>
		<a class='red button' style='color:white;' href='/whole-jam' target='_blank' title='The Whole Jam'>Tutte le note</a>
	</div>
</div>

<ul>
	{% for note in collections.jam -%}
		{% if note.data.main -%}
			<li lang='{{ note.data.lang }}'>
				<a href='{{ note.url }}' lang='{{ note.data.lang }}' title='{{ note.data.title }}'>{{ note.data.title }}</a>
				{% if note.data.description -%}
					&ensp;—&ensp;{{ note.data.description | markdownify | strip_html | truncatewords: 30 }}
				{% endif -%}
			</li>
		{% endif -%}
	{% endfor -%}
</ul>

<div class='flex row'>
	<a class='red button' style='color:white;' href='/whole-jam' target='_blank' title='The Whole Jam'>Tutte le note</a>
</div>

<div class='yellow box'>
	La caratteristica fondamentale che rende la Marmellata efficace e così sorprendentemente potente è la connessione fra vari differenti pensieri. Per questo motivo, nello stesso vasetto che contiene questa marmellata esistono collegamenti a note che ho scelto di tenere private. Potrebbe accadere che alcuni di questi siano riportati in una nota pubblica; i link che portano a pagine private non funzioneranno, appariranno [[così]].
</div>
