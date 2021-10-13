---
date: 2020-02-04
updated: 2021-10-06T15:18:05+02:00
tags: wip log csvfy
aliases: ['Cose extended', 'Tutte le cose', 'Stuff extended', 'Di tutto e di più', 'Done', 'Fatto']
lang: it
redirect_from: ['/tuttopiu', '/cose-extended', '/stuff-extended', '/stuff-extended-it', '/stuff-extended/it', '/it/stuff-extended', '/everything', '/done', '/fatto', '/fatte']
main: true
description: Un archivio di tutte le cose che faccio e che ho fatto
todo:
  - 'Move this to a CSV/YAML file (how to handle links and resources?)'
  - 'Sort everything BY DATE, with YEAR as H2; current H2s should become tags'
toc: false
---
Dato che, per mia natura, sono una trottola che gira ovunque per fare tante (troppe) diverse cose 

<div class='yellow box'>
Alcuni link fra i seguenti potrebbero essere protetti da password oppure non aggiornati. Se aveste bisogno di accedere a immagini private, <a class='u-email' href='mailto:{{ site.email | encode_email }}' rel='me' title='Scrivimi un’email'>scrivetemi</a>.
</div>

<ul>
	{% assign tutto = site.data.tutto | sort: 'end' %}
	{% for cosa in tutto %}
		<li {% if cosa.id %}id='{{ cosa.id }}'{% endif %}>
			{% if cosa.start %}
				Da {{ cosa.start | date_to_string }} a {{ cosa.end | date_to_string }}, 
			{% else %}
				{{ cosa.end | date_to_string }}, 
			{% endif %}
			{% if cosa.url %}
				<a href='{{ cosa.url }}' target='_blank' title='{{ cosa.title }}'>{{ cosa.title }}</a>, 
			{% else %}
				<strong>{{ cosa.title }}</strong>, 
			{% endif %}
			{% if cosa.lat %}
				<a href='https://openstreetmap.org?mlat={{ cosa.lat }}&mlon={{ cosa.lon }}&zoom=18' target='_blank' title='{{ cosa.location }} su OpenStreetMap'>{{ cosa.location }}</a>
			{% else %}
				{{ cosa.location }}
			{% endif %}
			{% if cosa.notes %}
				 — {{ cosa.notes }}
			{% endif %}
			{% if cosa.data %}
				<br />risorse: {{ cosa.data }}
			{% endif %}
		</li>
	{% endfor %}
</ul>

{% comment %}
## Concertini

Ogni tanto organizzo qualche seratina di musica dal vivo nel ponente ligure (casa mia).

- 9 luglio 2019, [**<cite>Il mio CUBO suona il Rock</cite>**](https://www.facebook.com/events/318752479011472) al [CUBO](https://www.instagram.com/ilcuboofficial 'ilcuboofficial - Instagram')
	- [Foto](https://images.tommi.space/index?/category/91-il_mio_cubo_suona_il_rock '“Il mio Cubo suona il rock” - Visioni')
	- [Video teaser](https://www.facebook.com/QuelDuoLi/videos/2333791650275489/ 'Video teaser su Facebook')
	- [Video intervista](https://vimeo.com/347306203 'Intervista di Rivieratime')
	- stampa
		- [Riviera Time](https://web.archive.org/web/20200524174632/https://www.rivieratime.news/sanremo-tutto-pronto-per-il-mio-cubo-suona-il-rock-musica-live-con-quel-duo-li-e-cantiere-164/)
		- [Sanremonews](https://web.archive.org/web/20200524175136/https://www.sanremonews.it/2019/07/08/leggi-notizia/argomenti/eventi-1/articolo/sanremo-domani-il-mio-cubo-suona-il-rock-con-il-live-di-quel-duo-li-e-cantiere-164-video.html)
- 27 dicembre 2019, [**A little Christmas show**](https://www.facebook.com/events/318752479011472/), organizzato con i miei amici squinternati del [Club Tenco](/cose#club-tenco)
	- [Foto](https://flic.kr/s/aHsmKm7bp2)

<br>

## Radioimmaginaria

Con e grazie a [Radioimmaginaria](/cose#radioimmaginaria) ho fatto la maggior parte degli eventi più belli e indimenticabili della mia vita. Nel 2016 e 2017 sono stato eletto Capo COdA, capo del Consiglio delle Antenne.

- dal 21 al 24 febbraio 2014, **Festival di Sanremo 2014**
	- [Puntate](/rimm-db#festival-di-sanremo-2014)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/721577103726639179)
- dal 25 al 31 agosto 2014, **Radiocampo GreenTeen 2014**, Riccione
	- [Puntate](/rimm-db#radiocampo-2014)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710372805037)
- dal 12 al 15 febbraio 2015, **Festival di Sanremo 2015**
	- [Puntate](/rimm-db#festival-di-sanremo-2015)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710411503952)
	- [Foto da Radioimmaginaria](https://flic.kr/s/aHskvtuM9o)
- il 5 agosto 2015 ho organizzato con la redazione di Radioimmaginaria Sanremo il mio primo evento in assoluto, l’[**<cite>Ultra BEACH PARTY immaginario</cite>**](https://www.facebook.com/events/917289898363949/), a Riva Ligure
	- [Foto](https://www.flickr.com/gp/xplosionmind/n17775)
- dal 23 al 31 agosto e dal 29 al 31 ottobre 2015, **EXPO Milano 2015**
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710391363066)
	- [Foto da Radioimmaginaria](https://flic.kr/s/aHskmDM2RX)
	- [Puntate](/rimm-db#expo-milano-2015)
- il 19 settembre 2015, la prima edizione di **<cite>Teen Parade</cite>**, a Castelguelfo di Bologna
	- [Puntate](/rimm-db#teen-parade-2015)
	- [Video](https://vimeo.com/radioimmaginaria/tparade2015)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710410135602)
	- [Foto di Radioimmaginaria](https://flic.kr/s/aHskAsvk5s)
- il 29 gennaio 2016, Radioimmaginaria all’**Istituto Superiore Mario Boella** (ISMB) di Torino
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710720001382)
	- [Post](https://www.facebook.com/radioimmaginaria/photos/a.143551849036696/1065427373515801/)
	- Puntata [parte 1](https://www.spreaker.com/user/ariaimmaginaria/to-la-tecnologia-di-radioimmaginaria), [parte 2](https://www.spreaker.com/user/ariaimmaginaria/to-la-tecnologia-di-radioimmaginaria-2pt)
- dal 7 al 14 febbraio 2016, **Festival di Sanremo 2016**
	- [Puntate](/rimm-db#festival-di-sanremo-2016)
	- [Foto da Radioimmaginaria](https://flic.kr/s/aHskvEz8fk)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710720019412)
- dall'8 al 10 aprile 2016, <a href='http://www.radiocitymilano.it/' target='_blank' title='Radiocity Milano'>Radiocity</a> e <a href='https://www.internationalradiofestival.com' target='_blank' title='International Radio Festival'>International Radio Festival</a>, Milano
	- [Puntate](https://www.flickr.com/photos/xplosionmind/albums/72157710719651706)
	- [Foto da Radioimmaginaria](https://www.flickr.com/photos/radioimmaginaria/albums/72157668517426676)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710719651706)
- dal 13 al 15 maggio 2016, **Missione a Londra**: sono andato con le mitiche Flora e Amalia in quel di Londra a salvare la redazione di Radioimmaginaria Londra
	- [Puntata](https://www.spreaker.com/user/ariaimmaginaria/italy-meets-london)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710719709951)
- dal 15 al 24 luglio 2016, [**<cite>Giffoni Film Festival</cite>** 2016](https://www.giffonifilmfestival.it/diario-gff-2016.html)
	- [Foto da Radioimmaginaria](https://flic.kr/s/aHskK5eqx3)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710729227317)
- dal 24 al 27 agosto 2016, il primo **Radiocampo immaginario** a **Riva Ligure**, con **inaugurazione della Redazione** di Radioimmaginaria Riva Ligure
	- [Puntate](/rimm-db#Radiocampo-2016)
	- Stampa:
		- [Riviera24](https://web.archive.org/web/20170810080233/https://www.riviera24.it/2016/08/radioimmaginaria-a-riva-ligure-per-il-radiocampo-233170/)
	- [Foto di promozione](https://www.flickr.com/photos/xplosionmind/albums/72157710727773568)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710728974811)
- il 9 e 10 settembre 2016, [Teen Parade](https://vimeo.com/284246871), Castelguelfo di Bologna
	- [Puntate](/rimm-db#teen-parade-2016)
	- [Foto da Radioimmaginaria](https://flic.kr/s/aHskK2sy8z)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710728874456)
- 30 novembre 2016, **School attack** a Riva Ligure
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710728971071)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710731814518) di una puntata di Radioimmaginaria Riva, poco dopo, l’8 marzo 2017
- dall’8 al 13 febbraio 2017, il **Festival di Sanremo**
	- [Puntate](rimm-db#festival-di-sanremo-2017)
	- [Foto di Radioimmaginaria](https://flic.kr/s/aHskRvXnWV)
	- [Foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710733326752)
- 30 marzo 2017, l’**intervista ai [Cantiere 164](https://www.facebook.com/Cantiere164 'Pagina Facebook dei Cantiere 164')** fu l’inizio di una grande stima e amicizia reciproca
	- [Puntata](https://www.spreaker.com/user/ariaimmaginaria/smo-lavori-in-corso-per-il-titolo)
	- [Foto](https://www.flickr.com/photos/xplosionmind/albums/72157710733018483)
- dal 21 al 23 aprile 2017, [**<cite>Radiocity</cite>**](http://www.radiocitymilano.it/ 'Radiocity Milano'), Milano
	- [Foto](https://flic.kr/s/aHskYWpS5q)
- dal 20 al 25 agosto 2017 ho programmato e organizzato tutti gli appuntementi del [**Radiocampo immaginario**](https://www.facebook.com/events/1356117211103947/) a Riva Ligure.
	- [Puntate](/rimm-db#teen-parade-2017)
	- [Articolo](https://www.riviera24.it/2017/08/a-riva-ligure-ce-radioimmaginaria-per-il-radiocampo-263655/) su Riviera24
	- [Un video bellissimo](https://vimeo.com/radioimmaginaria/comeguadagnare)
- il 6 e 7 settembre 2017, [**<cite>Teen Parade</cite>**](https://vimeo.com/radioimmaginaria/tparade2017 'Teen Parade 2017'), Bologna Fiere
	- [video](https://vimeo.com/search?q=Teen+Parade+2017 'Tutti i video della Teen Parade 2017 su Vimeo')
	- [foto](https://flic.kr/s/aHsm5bZ7rq)
- dal 6 al 10 febbraio 2018, **Festival di Sanremo 2018**
	- [puntate](/rimm-db#festival-di-sanremo-2018)
	- [foto](https://flic.kr/s/aHsmeW5a5n)
- dal 21 al 25 agosto 2018, [**<cite>Radiocampo immaginario</cite>**](https://radioimmaginaria.it/content/279-radiocampo-riva-ligure), Riva Ligure
- dal 5 al 7 settembre 2018, [**Teen Parade**](https://vimeo.com/306153145), Bologna Fiere
	- [tutte le foto](https://flic.kr/s/aHsmrUxy9Q)
	- [best of](https://flic.kr/s/aHsmrUxy9Q)
	- [video](https://vimeo.com/search?q=%22Teen+Parade+2018%22)
- il 7 settembre 2018, ho presentato l’ultimo mio evento da tipo immaginario, [**<cite>CATCH-EyoU</cite>**](http://www.catcheyou.eu/ 'CATCH-EyoU official website'), a Bruxelles
	- [foto](https://www.flickr.com/photos/radioimmaginaria/albums/72157698540493742)
	- [best of](https://www.spreaker.com/user/ariaimmaginaria/bruxelles-unione-europea 'Best of dell'evento')
	- [puntata completa](https://www.spreaker.com/user/ariaimmaginaria/catcheyou-from-brussels)

A settembre 2018, il mio percorso da speaker di Radioimmaginaria si è concluso, ma questa grande famiglia di matti geniali è sempre rimasta nel mio cuore e sono tornato più volte a dar loro una mano, principalmente facendo foto.

- il 14 novembre 2019, [**<cite>Teen Parade</cite>**](https://radioimmaginaria.it/teenparade2019), Genova
	- [foto da Radioimmaginaria](https://flic.kr/s/aHsmJjqJpQ)
	- [foto mie](https://www.flickr.com/gp/xplosionmind/CvT4qm)

<br>
<br>

## Scout

[Sono scout](/cose#scouting) da quando ho 8 anni. Con il mio gruppo (il [Costa Balenae](https://www.facebook.com/Agesci-Costabalenae-484902901713104/ 'Agesci Costabalenae su Facebook') di Santo Stefano al Mare) ho vissuto speciali e indimenticabili avventure.

Premessa per i profani: il <cite>San Giorgio</cite> è l’evento di due o tre giorni in cui si riuniscono i reparti di tutti i gruppi di una zona.

- [San Giorgio 2015](https://www.flickr.com/photos/xplosionmind/albums/72157710372793511), Taggia
- 6 giugno 2015, [Autofinanziamento a tema pirati](https://www.flickr.com/photos/xplosionmind/albums/72157710384848046), Campo Scout
- il 13 giugno 2015, tutti gli scout AGESCI in Italia si sono riuniti in piazza San Pietro a Roma per un [incontro con il Papa](https://emiro.agesci.it/tag/agescidalpapa/ 'Agesci dal Papa'). Io sono stato estratto come rappresentante della Regione Liguria per incontrarlo di persona
	- [foto](https://www.flickr.com/photos/xplosionmind/albums/72157710132331486)
- dal 16 al 23 luglio 2015, [campo estivo](https://www.flickr.com/photos/xplosionmind/albums/72157710386835056), Mendatica
- 8 e 9 novembre 2015, [passaggi](https://www.flickr.com/photos/xplosionmind/albums/72157710718504578), Carpasio e Cipressa
- 24 e 25 aprile 2016, [San Giorgio](https://www.flickr.com/photos/xplosionmind/albums/72157710718663853), Cipressa
- 28 e 29 ottobre 2016, [campetto di responsabilità](https://www.flickr.com/photos/xplosionmind/albums/72157710727851918), Laigueglia
- 16 marzo 2019, [uscita di Clan](https://www.flickr.com/photos/xplosionmind/albums/72157690486947843) a Colla Micheri
- il 26 maggio 2019 ho fatto servizio alla [Caccia di Zona](https://www.flickr.com/photos/xplosionmind/albums/72157708825090931) a Imperia
- il 4 gennaio 2021 ho preso la *Partenza*

<br>
<br>

## Giffoni Film Festival

Dopo essere andato per alcuni anni con [Radioimmaginaria](/cose#radioimmaginaria), sono diventato giurato del Giffoni Film Festival, poi membro della Masterclass Cult, poi Giffoni Ambassador e parte della squadra della [Giffoni Factory](https://www.instagram.com/giffoni_factory/).

A Giffoni non scatto mai molte foto, per questo, oltre a quelli molto scarni sul mio profilo Flickr, ho inserito anche collegamenti agli album pubblicati dal [profilo del festival](https://www.flickr.com/photos/giffonifilmfestival/albums).

- dal 20 al 28 luglio, [**Giffoni 2018**](https://www.giffonifilmfestival.it/diario-gff-2018.html), sono stato nella giuria Generator +18
	- [foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157704830829235)
	- [foto di Giffoni](https://www.flickr.com/photos/giffonifilmfestival/collections/72157672241562127/)
- dal 19 al 27 luglio, [**Giffoni 2019**](https://www.giffonifilmfestival.it/diario-gff-2019.html), sono stato in Masterclass Cult
	- [foto mie](https://www.flickr.com/photos/xplosionmind/albums/72157710084233062)
	- [foto di Giffoni](https://www.flickr.com/photos/giffonifilmfestival/collections/72157709275531493/)
- durante la quarantena di marzo e aprile 2020, al mio amico Alfonso è venuto in mente di creare un piccolo cineforum virtuale, che ha chiamato [\#iorestoacasa cineforum](https://instagram.com/io). Inizialmente è stata una cosa fra amici della Masterclass e si guardava un film ogni giorno, poi con nostro grande stupore è diventato sempre più grosso e abbiamo avuto dei gran ospiti. Elenco quelli che sono stati presenti nelle videocall a cui ho partecipato
	- [Nicholas Britell](https://www.imdb.com/name/nm1615109/), che adesso incredibilmente addirittura mi segue su instagram
	- [Seamus McGarvey](https://www.imdb.com/name/nm0568974/)
	- [Alessandro Borghi](https://www.imdb.com/name/nm2899175/)
	- [Ciro D’Emilio](https://www.imdb.com/name/nm3318452/)
	- [Daniele Ciprì](https://www.imdb.com/name/nm0162668/)
	- [Luca Ward](https://www.imdb.com/name/nm0911697/)
- dal 18 al 22 e dal 25 al 29 agosto, [**Giffoni 2020**](https://www.giffonifilmfestival.it/diario-gff-2020.html)
	- [foto]()
	- [album di Giffoni](https://www.flickr.com/photos/giffonifilmfestival/collections/72157715587418446/)
- dal 26 al 30 dicembre 2020 ho condotto la prima **Giffoni Winter Edition** insieme agli altri ragazzi della Giffoni Factory

### Giffoni Factory

[Qui](https://www.instagram.com/ipso_factory/ 'Ipso Factory su Instagram') si trovano tutti i contenuti che ho creato con la Giffoni Factory.

<br>
<br>

## Club Tenco

Tutto è partito da un progetto di classe per alternanza scuola-lavoro nel 2016, ma poi è diventato un amore vero per la musica d’autore e per tutti i fuori di testa del [Club Tenco](/cose#club-tenco) di Sanremo

- il 27 maggio 2017, con la mia classe abbiamo ideato *[**Confusion in an old station**](https://www.flickr.com/photos/xplosionmind/albums/72157710756220461)*, durante cui abbiamo proiettato un nostro videoclip di [*Un Matto*](https://vimeo.com/xplosionmind/unmatto), di Fabrizio De Andrè.
	- I [dietro le quinte](https://www.flickr.com/photos/xplosionmind/albums/72157710733237203) di Un Matto
	- stampa
		- [Riviera 24](https://web.archive.org/web/20200613083824/http://www.riviera24.it/evento/confusion-in-an-old-station-in-mostra-le-opere-degli-studenti-del-liceo-cassini-di-sanremo/)
		- [Sanremonews](https://web.archive.org/web/20170629180829/http://www.sanremonews.it/2017/05/26/leggi-notizia/argomenti/eventi-1/articolo/sanremo-nella-sede-del-club-tenco-la-mostra-confusion-in-an-old-station-degli-studenti-del-li.html)
- dal 18 al 20 ottobre 2018, il [**Premio Tenco 2018**](https://www.allmusicitalia.it/news/premio-tenco-2018-programma.html)
	- [foto](https://www.flickr.com/photos/xplosionmind/albums/72157704933552534)
- il 10 maggio 2019, [**Viva Vecchioni**](https://www.flickr.com/photos/xplosionmind/albums/72157678232317077), con Roberto Vecchioni, Concita De Gregorio e Morgan al Teatro del Casino di Sanremo.
- dal 17 al 19 ottobre, il [**Premio Tenco 2019**](https://clubtenco.it/premio-tenco-2019/)
	- [foto](https://www.flickr.com/photos/xplosionmind/albums/72157711803975078)

<br>

## LIBERA

Sono volontario di [Libera](/cose#libera) da un po’, ormai. Seguono tutte le belle manifestazioni che abbiamo organizzato a Sanremo.

- il 16 gennaio 2019, [**Liberamente musica**](https://www.flickr.com/photos/xplosionmind/albums/72157678302545468), presso la sede del Club Tenco di Sanremo
- il 9 febbraio 2019, abbiamo inaugurato il [**Presidio**](https://www.libera.it/schede-13-libera_sul_territorio_cerca_un_presidio) Libera intitolato a [**Rosario Livatino**](https://it.wikipedia.org/wiki/Rosario_Livatino) presso il [Liceo Cassini di Sanremo](https://www.liceogdcassini.edu.it/)
- 21 marzo 2019, [giornata della memoria e dell’impegno](https://www.flickr.com/photos/xplosionmind/albums/72157691100306223) in onore delle vittime innocenti di mafia, Sanremo
- il 23 maggio 2020 in [questa diretta](https://it-it.facebook.com/551177158313780/videos/1280858522118804/) ho parlato di beni confiscati alle mafie e del podcast creato con il coordinamento di Libera Imperia, [Libera in Pillole].

<br>

## La Nuova Corrente

Dal 2016 al 2019 ho lavorato nell’[Ufficio Stampa](https://www.lanuovacorrente.com/) del mio Liceo, il [Liceo G.D. Cassini](https://www.liceogdcassini.edu.it/) di Sanremo. Dal 4 ottobre 2017, per tutto il successivo anno scolastico, ne sono stato direttore, infatti ne abbiamo combinate di tutti i colori.

Ho montato o ripreso la gran parte dei video del nostro canale, chiamato [La Nuova Corrente](https://www.youtube.com/channel/UCEvYS5AWyxWIQrRpyC27MHg/).

- Nel 2017 siamo stati fra i vincitori del premio dell’Ordine dei Giornalisti [*Fare il Giornale nelle Scuole*](https://www.odg.it/il-giornale-nelle-scuole) e abbiamo partecipato, l’11 e il 12 aprile, alla [cerimonia di premiazione](https://youtu.be/bCrHQz4rCQs), partecipando successivamente a una delle conferenze che più mi hanno segnato in tutta la mia vita, con Paolo Borrometi e Federica Angeli.
- Nel 2018 abbiamo ricevuto nuovamente il premio, tornando a Cesena per la premiazione il 4 ed il 5 aprile.
- Dal 6 al 10 febbraio 2018, con una squadra di altri tre coraggiosi pseudo-giornalisti, ci siamo intrufolati nella sala stampa del Festival di Sanremo e ci siamo messi a riprendere un po’ tutto quello che ci sta dentro. Incredibilmente, una delle nostre interviste ha raggiunto le [44 mila visualizzazioni](https://www.youtube.com/watch?v=NjzHlPC_r-4), non chiedetemi come. Altri video e interviste dal Festival possono essere trovati sul medesimo canale.

<br>
<br>

## quitsocialmedia.club

Ho ideato e concepito [quitsocialmedia.club](https://quitsocialmedia.club 'Quit Social Media'). Interviste e pubblicazioni al riguardo sono elencate nel[la sezione “Interviste e pubblicazioni” di quitsocialmedia.club](https://quitsocialmedia.club/stampa#interviste-e-pubblicazioni 'Stampa &rarr; Interviste e pubblicazioni - quitsocialmedia.club')

<br>
<br>

## altro

- Sono stato <i lang='en'>Helper</i> ai campi <a href='https://www.acle.org/' target='_blank' title='ACLE'>ACLE</a> ad Arma di Taggia nelle estati 2016 e 2017
- dal 2014 al 2018 ho partecipato agli allenamenti (anche alle gare, ma con risultati affatto lusinghieri) delle Olimpiadi di Matematica e della [Coppa Gauss a Squadre](http://gauss.dima.unige.it/ 'Coppa Gauss - Università di Genova').
- Sono un appassionatissimo ma non altrettanto perito giocatore di Dungeons & Dragons. La mia prima ed unica campagna fin ora è iniziata nell’ottobre 2015 e si è conclusa ad aprile 2020. Il nostro Game Master si sta ispirando principalmente all’avventura di [<cite>Rise of the Runelords</cite>](https://pathfinderwiki.com/wiki/Rise_of_the_Runelords 'Rise of the Runelords on Pathfinder wiki').
- Dal 2015 al 2018 sono stato aiuto-catechista nel corso dei cresimandi della parrocchia di Santo Stefano al Mare
- Il 20 giugno 2020 ho co-organizzato a Sanremo [<cite>Twenty Shoes Against racism</cite>](https://www.sanremonews.it/2020/06/20/leggi-notizia/argomenti/altre-notizie/articolo/sanremo-le-sardine-ponentine-a-pian-di-nave-per-levento-20-shoes-against-racism-foto.html) l’evento di [6000sardine Ponentine](https://www.facebook.com/6000sardineponentine/) contro il razzismo
	- [immagini](https://www.flickr.com/photos/xplosionmind/albums/72157714829053321)
- Dal 5 al 13 luglio 2020 ho partecipato al workshop di giornalismo de [Il Post](https://ilpost.it 'Il Post') a Peccioli. Ho scritto [questo articolo](https://www.ilpost.it/2020/07/12/sgomberi-bogota-coronavirus/ 'Gli sgomberi a Bogotà, nonostante il coronavirus - Il Post')
- Il 25 ottobre 2020 ho tenuto [questo talk](http://go.tommi.space/MDN-LinuxDay2020) su [MDN Web Docs](https://mdn.dev 'MDN homepage') al [Linux Day](https://linuxday.it/2020/ 'Linux Day 2020')
- Il <b class='missing'>+++</b> settembre 2020 ho partecipato al[la prima <cite>Filosofia di gruppo</cite>](https://tlon.it/wp-content/uploads/2020/09/audio-zoom-1a.mp3 'Podcast Filosofia di Gruppo #1') su [[Notes on Ten Arguments For Deleting Your Social Media Accounts|Dieci ragioni per eliminare il proprio account sui social media]] organizzato da [Tlon](https://tlon.it 'Sito ufficiale di Tlon'). Il mio intervento è a al minuto `44:45`
- dall’1 al 6 Marzo 2021 ho gestito [la pagina Instagram](https://instagram.com/sanremonews 'Sanremonews su Instagram') di [Sanremonews](https://sanremonews.it 'Sanremonews') in occasione del Festival di Sanremo 2021
- l’8 ed il 9 maggio 2021, ho partecipato al [VeUMEU 2021](https://www.univiu.org/viu-life/veumeu-2021 'Venice Universities’ Model European Union') come parlamentare del Parlamento Europeo, in rappresentanza del Partito Social Democratico del Portogallo.
{% endcomment %}

<br>
<br>

<h2>Spettatore</h2>

Tengo traccia di tutto quello a cui ho assistito da spettatore, passivo, ma quasi sempre estasiato e saltellante, in <a href='/giri' title='Giri'><em>Giri</em></a>.
