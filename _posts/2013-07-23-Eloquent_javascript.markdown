---
layout: default
title: Eloquent Javascript
---
#Eloquent javascript
### <span class = "date">23 July 2013</span>

This seems like a really nice middle ground. Over the last ten years or so, it seems like the entire internet has been busy turning itself into one big MOOC. The term was only even *coined* in 2008, but one of the essential characteristics of Open Source is that it generates communities of learners and educational material, and that's been going really strong for a good fifteen, twenty, thiry years now.

But it's often seemed to me that one of the challenges if you want to learn something in this domain is finding good intermediate material. There's lots of great intro material and always lots of stuff that's well above your head, but once you've clear the hello-world stage and understand basics, finding the next thing that's at the right level of difficulty for you is really challenging. Think about it -- it's a situation where you may partially know what you don't know, and partially not know what you don't know (The Rumsfeldian know-unknows and unknown unknowns). But your understanding of what you know may not even be accurate -- you may *think* you understand functional programming reasonally well, but how well do you actually impliment it in practice? Or do you fall-back onto an imperative style, not even thinking about alternatives? Hard to know, unless you have mentors, because who's going to check your work?

This is part of why it's important to find a social context to program in. This is also why I've been enjoying Haverbeke's E.J. It's ostensibly a bit more of an introductory book than I would have wanted, so I skipped the first five or so chapters. But jumping straight into the chapter on functional programming, I've already picked up a few nice tricks and been reminded of how nice Ruby is. For example, a typical problem exercise is a text processing task which involves parsing some marked-down text into fragments. This is a simple enough excercise, but the challenge is finding the most elegant, functional solution. In one small place I prefer part of my solution to Haverbeke's: when parsing marked-down Headers, Haverbeke uses a while loop and string.split, nibbling off the prepended "#" characters from the header string. I used string.lastIndexOf instead, which I think makes the intention of the code slightly clearer. However, other than that quibble, Haverbeke's solution to the task nice and elegant.

Another interesting aspect of some of these resources is that some of them are now starting to include stripped-down consoles within the webpage. Off the top of my head, I can think of CodeAcademy and RubyKoans as well as Haverbeke's resource. My memory of RubyKoans is that its webpage console mostly worked fairly well, but on some of the more complex higher-order functionl material Haverbeke covers, I quickly migrated the code into the browser's console so I could step through the code. And I remember being actively irritated by CodeAcademy's consoles.

I've only spent a bit of time with E.J. so far but its got some nice, intermediate-level material. I would definitely recommend it for anyone who's made it beyond the basics of JS.

Marijn Haverbeke's Eloquent Javascript is a free textbook, availble as a PDF and online, with interactive code snippets.
http://eloquentjavascript.net/