---
title: "Firefox tweaks"
permalink: /firefox
toc: 0
code: "true"
description: "I consider myself a Firefox power user: I love it and I take full advantage of its features. Here’s how I do it."
---

<br />

## Addons || Extensions

- Tabs containers, to avoid tracking, privacy intrusion, etc.
	- [Facebook Container](https://blog.mozilla.org/firefox/facebook-container-extension/)
	- [Google Container](https://github.com/containers-everywhere/contain-google)
	- [Reddit Container](https://github.com/SleepingPanda/contain-reddit)
	- [Twitter Container](https://github.com/v1shwa/contain-twitter)
- [Decentraleyes](https://decentraleyes.org/) emulates <abbr title="Content Delivery Networks">CDNs</abbr> to improve your online privacy. It intercepts traffic, finds supported resources locally, and injects them into the environment.
- [Disconnect](https://disconnect.me/), another thing to avoid tracking
- [DownThemAll!](https://downthemall.org/), to download all the links or images on a website
- [DuckDuckGo Privacy Essentials](https://duckduckgo.com/app), personal data protection
- [Feed Preview](https://code.guido-berhoerster.org/addons/firefox-addons/feed-preview/), to quickly and easily get the RSS feed links of a website
- [Firefox Voice](https://voice.mozilla.org/firefox-voice/), something like a more open, private and secure Siri or Google Assistant
- [Gitpod](https://www.gitpod.io/), ready-to-code development environments for any GitLab, GitHub, and Bitbucket project.
- [HTTPS Everywhere](https://www.eff.org/https-everywhere), to encrypt communications with many major websites, making the browsing experience more secure.
- [Invidition](https://codeberg.org/Booteille/Invidition), to redirect YouTube and Twitter requests to their counterparts ([invidio.us](https://invidio.us) and [nitter](https://nitter.net)) before loading them. Invidition has the purpose to not let any YouTube or Twitter requests pass.
- [Joplin Web Clipper](https://joplinapp.org/clipper/), a Joplin integration with the browser, to save links but also whole web pages
- [KeePassXC-Browser](https://github.com/keepassxreboot/keepassxc-browser), a [KeePassXC](https://keepassxc.org/) browser integration, to auto-fill password fields and get a seamless auto-completion experience
- [Kutt](https://github.com/abhijithvijayan/kutt-extension), to quickly shorten links of the visited page
- [Markdown Here](https://markdown-here.com/), to convert and stylize Markdown text just by clicking a button
- [Midnight Lizard](https://midnight-lizard.org/home), to show a dark interface even in websites which don’t support it by default
- [Mind the Time](https://addons.mozilla.org/en-US/firefox/addon/mind-the-time/), to be aware of how much time has been spent online, and in which specific website
- [Pontoon Add-on](https://github.com/MikkCZ/pontoon-addon), for Mozilla l10n volounteers, to check the translation status of a Mozilla page with ease
- [Privacy Badger](https://privacybadger.org/), the most famous privacy-aware extension
- [Search by Image](https://github.com/dessant/search-by-image), to quickly search for an image on several different search engines
- [uBlock Origin](https://github.com/gorhill/uBlock), the most famous (and effective) ad-blocker
- [Wappalyzer](https://www.wappalyzer.com/), for self-hosting enthusiasts like me, to check which framework, web server, OS, plugin, analytics service, etc. the visited website uses
- [Watch on LBRY](https://github.com/kodxana/Watch-on-LBRY), automatic redirection when a YouTube video can be found also on [LBRY](https://lbry.tv). It works exactly as Invidition.



### Interesting, but not in use

- [PrivacySpy](https://privacyspy.org/)
- [Polisis](https://www.pribot.org/polisis), to get a glimpse of what websites actually say in their privacy policies
- [Gesturefy](https://github.com/Robbendebiene/Gesturefy), a pure mouse gesture extension, which means it's only suited for mice and not touchpads.
- [Tridactyl](A Vim-like interface for Firefox)
- [Firefox Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers), a Firefox add-on that allows separate work, shopping or personal browsing without having to clear your history, log in and out, or use multiple browsers.

<br />
<br />

## Tweaks

A record of all the tweaks I made in `about:config`

- [ ] `privacy.trackingprotection.fingerprinting.enabled` = `true` - [FF67+] Blocks Fingerprinting
- [x] `privacy.trackingprotection.cryptomining.enabled` = `true` - [FF67+] Blocks CryptoMining
- [ ] `privacy.resistFingerprinting` = `true` - A result of the Tor Uplift effort, this preference makes Firefox more resistant to browser fingerprinting.
- [ ] `privacy.resistFingerprinting.letterboxing` = `true` so letterboxing is used to hide real browser size.
- [x] `privacy.trackingprotection.enabled` = `true` - This is Mozilla's new built-in tracking protection. One of it's benefits is blocking tracking (i.e. Google Analytics) on privileged pages where add-ons that usually do that are disabled.
- [x] `dom.event.clipboardevents.enabled` = `false` - Disable that websites can get notifications if you copy, paste, or cut something from a web page, and it lets them know which part of the page had been selected.
- [x] `media.eme.enabled` = `false` - Disables playback of DRM-controlled HTML5 content, which, if enabled, automatically downloads the Widevine Content Decryption Module provided by Google Inc. Details
	- [ ] `media.gmp-widevinecdm.enabled` = `false` - Disables the Widevine Content Decryption Module provided by Google Inc., used for the playback of DRM-controlled HTML5 content.
- [x] `media.navigator.enabled` = `false` - Websites can track the microphone and camera status of your device.
- [x] `network.cookie.cookieBehavior` = `1` - Disable cookies
	- `0` = Accept all cookies by default
    - `1` = Only accept from the originating site (block third-party cookies)
    - `2` = Block all cookies by default
- [x] `privacy.firstparty.isolate` = `true` - or preventing domains from accessing each other’s data. If something breaks, it’s most likely related to `this`.
- [ ] `extensions.pocket.enabled` - `false` - make Pocket integration go away
- [x] `geo.wifi.uri` = `https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%` in order to send nearby WiFi networks to Mozilla instead of Google. See also [MLS Software](https://wiki.mozilla.org/CloudServices/Location/Software).
- [x] `network.IDN_show_punycode` = `true` to see punycode instead of UTF-8 in case of spoofing attempt.
- [x] `ui.systemUsesDarkTheme` = `true` allow websites to know you're using dark theme
- [x] `network.http.referer.XOriginPolicy` = `1` - Only send Referer header when the full hostnames match. (Note: if you notice significant breakage, you might try 1 combined with an XOriginTrimmingPolicy tweak below.) [Source](https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/)
    - `0` = Send Referer in all cases
    - `1` = Send Referer to same eTLD sites
    - `2` = Send Referer only when the full hostnames match
- [x] `network.http.referer.XOriginTrimmingPolicy` = `2` - When sending Referer across origins, only send scheme, host, and port in the Referer header of cross-origin requests. [Source](https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/)
    - `0` = Send full url in Referer
    - `1` = Send url without query string in Referer
    - `2` = Only send scheme, host, and port in Referer
- [x] `beacon.enabled` = `false` - Disables sending additional analytics to web servers. Details
- [x] `browser.safebrowsing.downloads.remote.enabled` = `false` - Prevents Firefox from sending information about downloaded executable files to Google Safe Browsing to determine whether it should be blocked for safety reasons. [Details](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work#w_what-information-is-sent-to-mozilla-or-its-partners-when-phishing-and-malware-protection-are-enabled)
- [x] `network.IDN_show_punycode` = `true` - Not rendering IDNs as their Punycode equivalent leaves you open to phishing attacks that can be very difficult to notice. [Source](https://krebsonsecurity.com/2018/03/look-alike-domains-and-visual-confusion/#more-42636)
- [x] `network.trr.early-AAAA` = `true` to hopefully prefer IPv6
- [ ] `network.trr.bootstrapAddress` = `149.112.112.112` (Resolver 2 of [Quad9](https://quad9.net/)) -  DNS server to use for resolving the DoH name.
- [ ] `media.peerconnection.enabled` = `false` - While software like NoScript prevents this, it's probably a good idea to block this protocol directly as well, just to be safe. Note: This **disables browser-based call functionality that is used for webapps**
- [x] `services.sync.prefs.sync.privacy.trackingprotection.enabled` = `true`
- [x] `apz.allow_zooming` = `true`
- [x] `dom.gamepad.extensions.lightindicator` = `true` - seems like a cool thing to do
- [x] `dom.gamepad.extensions.multitouch` = `true` - seems like another cool thing to do
- [x] `extensions.experiments.enabled` = `true` - seems like another cool thing to do
- [x] `extensions.formautofill.creditCards.enabled` = `false`
