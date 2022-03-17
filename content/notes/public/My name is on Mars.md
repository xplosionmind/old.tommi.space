---
date: 2021-01-15T01:00:00+01:00
updated: 2022-03-14T14:55:36+01:00
redirect_from: [/on-mars/, /mars/]
description: My name is engraved in a plate on NASA’s Perseverance rover which is on Mars
tags: archive
---
<style>
	@media only screen and (min-width: 950px) {
		.mars.embed-container {
			margin: 0 10%
		}
	}
</style>
<div class='box' id='mars'>
	<h2 class='title'>{% if lang == 'it' %}Il mio nome atterrerà su Marte!{% else %}My name is landing on Mars!{% endif %}</h2>
	<div class='mars embed-container' style='--video--width: 980;--video--height: 410;'>
		<iframe width='980' height='410' src='https://mars.nasa.gov/layout/embed/send-your-name/mars2020/certificate/?cn=249520420534' frameborder='0'></iframe>
	</div>
	<p>
		{% if lang == 'it' %}
			Esatto, è incredibile ma vero. La scorsa estate ho compilato un modulo per mandare il mio nome su Marte, poi è stato registrato in un chip microscopico sul rover della @NASA <cite>Perseverance</cite>.<br>Ora, sta atterrando sul magico pianeta rosso.
		{% else %}
			That’s right, you read correctly. Last summer I filled a form to send my name on Mars, it has been recorded upon @NASA's rover <cite>Perseverance</cite> and it’s landing on Mars!
		{% endif %}
	</p>
	<div class='flex row'>
		<a class='red written button' href='https://mars.nasa.gov/participate/send-your-name/mars2020/certificate/249520420534'  target='_blank' title='Send your name to Mars - NASA'>{% if lang == 'it' %}Scopri di più{% else %}Find out more{% endif %}</a>
	</div>
</div>
