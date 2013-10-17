---
layout: default
Title: Thoughts about the JS module pattern.
---


Coming to terms with the JS module pattern

I've recently been working with Aesthetec Studio on a very neat project based around a signage system that's going to be installed into a teaching hospital in the US. The signage system is made of high-resolution LED pixels which are driven by some custom hardware. Each LED driver boards talks to a Raspbery Pi, which runs a custom display driver and web server. The display driver parses binary arrays into serial data that gets shot to the LED drivers. The webserver and everything it talks to has been my responsibily.

The server is built on Tornado (a big thank-you to Rob Gilson for pointing me at Tornado -- it's been a real pleasure to work with). The server gets structured JSON strings from a web front-end which the staff will be able to interact with, allowing them to create new messages for the display system, as well as load and edit saved messages. So, for the front-end user, there's the standard web-page with HTML, CSS and JS.

There's been a bit of a lull, and I figured I would go in and refactor the JS, tucking all those nice, modular functions I wrote into a module and making everything neater. The module pattern generally seems to be very well regarded, but as I dug into it a bit, I did some interesting discussions about its pros and cons. Clearly it's a win in that it keeps your footprint in the global name-space minimal and tucks gives you a closure to keep everything private. However, I found Jonathan Snook's criticisms particularly interesting: by it's very design, the module pattern means that you can't get at the private properties/function/vars in your code. This can complicate debugging. I'm pretty used to adding console.log messages into my code as a debugging strategy (probably too used to it, as I have to make a semi-regular habit of scrubbing old logging commands out. I should probably create a macro to do that for me..) But, I also heavily rely on Chrome and FF's dev tools to inspect and interact with variables and their states as I debug.

I expect my understanding of this pattern and its trade-offs will continue to evolve, but an hour ago this seemed like a no-brainer, simple refactoring. Now it's clear that there can be some trade off in this pattern between access to the code internals and (duh) modularity. Perhaps I'll defer this task and have a further conversation with the client about the eventual goals for this code -- if it's likely to be deployed into a system where other coders are going to be working, modularization will make a lot of sense. But so far, I'm the only one who's touched the code, and I don't know when that's going to change.