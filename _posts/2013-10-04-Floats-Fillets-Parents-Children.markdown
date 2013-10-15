---
layout: default
title: Floats, fillets, parents, children.
---
4 Oct 2013

On the desktop view of this site, the nav-bar sits at the top and has a single rounded corner. The hover-state also has the rounded corner, but only for the first element. This took a little poking at to get working. Because the nav-bar elements are floated, the nav-bar is collapsed and I'd forgotten the somewhat unintuitive fixes for this. There are a couple, but in this case setting overflow: hidden uncollapses the parent, re-establishes the parent/child relationship between the nav-bar div and allows the first-child selector to work. This [article](http://msdn.microsoft.com/en-us/magazine/dn201719.aspx) on ScriptJunkie pointed me in the right direction.