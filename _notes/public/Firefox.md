---
date: 2020-07-03T02:00:00+02:00
updated: 2021-12-15T23:17:13+01:00
tags: geek/apps
description: |
  I consider myself a Firefox power user: I love it and I take full advantage of its features. Here’s how I do it.
redirect_from: [/firefox-tweaks, /firefox-settings, /mozilla-firefox, /about-config, /aboutconfig, /firefox-config]
---
## Add-ons and Extensions

Three different add-ons configurations can be found in my [Firefox Collections](https://addons.mozilla.org/en-US/firefox/collections/13538650 'Tommi’s Firefox Collections'):

- [minimal](https://addons.mozilla.org/en-US/firefox/collections/13538650/minimal/ '“minimal” extensions collection') configuration: must-have add-ons for a safe and optimized browsing experience
- [main](https://addons.mozilla.org/en-US/firefox/collections/13538650/main/ '“main” extensions collection') configuration: the main extensions I use + integrated tools to take advantage of the services I use in the best way possible.
- [super](https://addons.mozilla.org/en-US/firefox/collections/13538650/super/ '“super” extensions collection - Firefox AddOns') configuration, extra add-ons to enjoy all the bells and whistles extensions can offer

<br>
<br>

## Shortcuts

Standard shortcuts are in [Firefox shortcuts](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly 'Keyboard Shortcuts - Mozilla Support'), while my custom shortcuts are [[Hotkeys#Firefox|Here]]

[Developer toolbox shortcuts](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts 'Keyboard shortcuts - MDN')

<br>
<br>

## Missing

Even though Firefox is my go-to browser and I absolutely love it, it lacks some features which I really miss. I keep track of them below:

- Easy and quick site-specific tracking, fingerprinting and cookies settings (Like in [[Brave]])

<br>
<br>

## userChrome.css

userChrome.css is the CSS file which can be used to modify the appearance of Firefox. Below there are my little modifications.

```css
/* Hide the back and forward buttons */
#back-button, #forward-button { display:none!important; }
```

<br>
<br>

## about:config

A record of all the tweaks I made in Firefox `about:config` page

- [x] `privacy.resistFingerprinting` = `true` - A result of the Tor Uplift effort, this preference makes Firefox more resistant to browser fingerprinting.
- [ ] `privacy.resistFingerprinting.letterboxing` = `true` so letterboxing is used to hide real browser size.
- [x] `privacy.trackingprotection.enabled` = `true` - This is Mozilla's new built-in tracking protection. One of it’s benefits is blocking tracking (i.e. Google Analytics) on privileged pages where add-ons that usually do that are disabled.
- [ ] `dom.event.clipboardevents.enabled` = `false` - Disable that websites can get notifications if you copy, paste, or cut something from a web page, and it lets them know which part of the page had been selected.
- [ ] `media.eme.enabled` = `false` - Disables playback of DRM-controlled HTML5 content, which, if enabled, automatically downloads the Widevine Content Decryption Module provided by Google Inc. Details
	- [ ] `media.gmp-widevinecdm.enabled` = `false` - Disables the Widevine Content Decryption Module provided by Google Inc., used for the playback of DRM-controlled HTML5 content.
- [ ] `media.navigator.enabled` = `false` - Websites can track the microphone and camera status of your device.
- [x] `network.cookie.cookieBehavior` = `1` - Disable cookies
	- `0` = Accept all cookies by default
	- `1` = Only accept from the originating site (block third-party cookies)
	- `2` = Block all cookies by default
- [ ] `privacy.firstparty.isolate` = `true` - or preventing domains from accessing each other’s data. If something breaks, it is most likely related to this.
- [x] `extensions.pocket.enabled` - `false` - make Pocket integration go away
- [ ] `geo.wifi.uri` = `https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%` in order to send nearby WiFi networks to Mozilla instead of Google. In order to request an API Key and to find out more about the project, visit [Mozilla Location Services](https://location.services.mozilla.com/ "Mozilla Location Services").
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
- [ ] `network.trr.bootstrapAddress` = `149.112.112.112` (Resolver 2 of [Quad9](https://quad9.net/)) -  DNS server to use for resolving the DoH name.
- [ ] `media.peerconnection.enabled` = `false` - While software like NoScript prevents this, it’s probably a good idea to block this protocol directly as well, just to be safe. Note: This <u>disables browser-based call functionality that is used for webapps</u>
- [x] `services.sync.prefs.sync.privacy.trackingprotection.enabled` = `true`
- [x] `dom.gamepad.extensions.lightindicator` = `true` - seems like a cool thing to do
- [x] `dom.gamepad.extensions.multitouch` = `true` - seems like another cool thing to do
- [x] `extensions.experiments.enabled` = `true` - seems like another cool thing to do
- [x] `extensions.formautofill.creditCards.enabled` = `false`

<br>
<br>

## Resources

- [PrivacyTools](https://www.privacytools.io/browsers/#about_config "about:config section on PrivacyTools")
- [Mikaela Suomalainen](https://mikaela.info/browser-extensions.html "Browser extensions on mikaela.info")
- [PrivacyTools Community post](https://forum.privacytools.io/t/changing-the-firefox-tweaks-recommendation/4752 "Changing the Firefox Tweaks Reccomendation")
