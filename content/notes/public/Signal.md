---
date: 2020-12-08
updated: 2022-02-12T13:23:14+01:00
aliases: Switch to Signal, Quit WhatsApp
description:
  Why it is important to switch to Signal, and all of the reasons why it is an ethical choice and not a merely technical one
tags: geek/apps
ref: signal
redirect_from: ['/quit-whatsapp/']
toc: false
---
## Why WhatsApp is not good

- <q cite='https://www.justsecurity.org/10318/video-clip-director-nsa-cia-we-kill-people-based-metadata/'><a href="https://www.justsecurity.org/10318/video-clip-director-nsa-cia-we-kill-people-based-metadata/" target="_blank" title="We kill people based on metadata">We kill people based on metadata</a></q> is a sentence pronounced by [General Michael Hayden], former director of the NSA and the CIA

<br>
<br>

## Perks

The perks of Signal are simple:

1. **no data** is collected except your phone number
2. While remaining a super neat and simple messaging app, <u>it uses military-grade encryption by default</u>
3. [Its source code is open][GitHub] and publicly audited, which means that <u>anyone could check how Signal works</u> and verify its actual respect of the user’s privacy
4. Signal is owned by [a nonprofit](https://signalfoundation.org/ 'Signal Foundation'): anything about Signal has the sole purpose of serving the user, not making money. Signal survives only thanks to [donations] and [investments](https://www.wired.com/story/signal-foundation-whatsapp-brian-acton/ 'WhatsApp Co-Founder Puts $50M Into Signal To Supercharge Encrypted Messaging - WIRED').

<br>
<br>

## Signal does not solve the real problem

The problem with Signal is that, while being an absolutely perfect solution concerning privacy, the underlying infrastructure supporting it is closed and heavily bounded to the both physical and economical capabilities of Signal.

To synthesize this in one word, the issue is the **centralized** nature of the whole service. If tomorrow Signal realizes that it cannot afford to keep things running and shut the whole thing down, or in the case somebody wants to plug into the infrastructure their own app or their own messaging server, there is nobody who can do anything about it.

In my opinion, the **perfect** solution exists. The point is that <u>it is not simple</u>, and, above all, the getting the importance of its implementation requires a quite technical understanding. Using [decentralization](/the-power-of-decentralization 'The Power of Decentralization - tommi.space') means a lot of little independent servers can work together using the same protocol. Examples are [XMPP] and [Matrix].

<br>
<br>

## It is a whole different thing with respect to Telegram

**Telegram is not encrypted**.  
**<u>Telegram is not encrypted</u>**.

When people say <q>Telegram is secure</q>, they actually mean that *the connection* between your device and Telegram’s servers is encrypted, while *in* Telegram’s servers, everything is completely accessible by whoever has access to them. The endlessly repeated anthem that mislead people is that Telegram does not intend to *look* at your stuff, that it does not *sell* it or *use* it, but:
1. You cannot *be sure* of this, since the source code is not open
2. If anybody, with any intention, manages to get into Telegram’s servers, everything is there, ready to be stolen and spread who knows where
3. There still is [the problem of centralization](#signal-does-not-solve-the-real-problem), here too

[General Michael Hayden]: https://en.wikipedia.org/wiki/Michael_Hayden_(general) 'Michael Hayden (general) on Wikipedia'
[GitHub]: https://github.com/signalapp 'Signal apps and back-end source code on GitHub'
[donations]: https://signal.org/donate/ 'Donate to Signal'
[Matrix]: https://matrix.org 'The Matrix Protocol'
[XMPP]: https://xmpp.org/ 'XMPP - The universal messaging standard'