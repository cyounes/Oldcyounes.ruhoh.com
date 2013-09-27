---
title: 'alsac Command Line Sound Controller'
date: '2012-12-03'
description:
categories:
---

When i've installed ubuntu with openbox window manager, there were no task bars
and no menus. that was a problem for me to control the sound using command line.
To solve this i wrote some lines quickly to create a simple and easy command line tool allows me to control sound volume.

`alsac` works only with **alsa** devices and tested only on Ubuntu 12.10, based on
`alsa` command and its parmeters.

## Installation:

<pre>
curl https://raw.github.com/cyounes/alsac/master/quickinstall.sh | sh 
</pre>

## Usage: 
<pre>
$ alsac [-|+] [value]
</pre>

<pre>
$ alsac [value] 
</pre>

<pre>
$ alsac [mute | unmute]
</pre>

## Examples:

Examples: 

+ `alsac - 10`  : decrease sound of 10% 

+ `alsac + 18 ` : increase sound of 18% 

+ `alsac 45`    : set sound to 45% 

+ `alsac mute`  : mute sound 

+ `alsac unmute`: unmute sound

## Github page:
https://github.com/cyounes/alsac

By Younes Cheikh

