---
title:
date: '2012-12-03'
description:
categories:
---

When i've installed ubuntu with openbox window manager, there were no task bars
and no menus. that was a problem for me to control the sound using command line.
To solve this i wrote some lines quickly to create a simple and easy command line tool allows me to control sound volume.

`csound` works only with alsa devices and tested only on Ubuntu 12.10, based on
`alsa` command and its parmeters.

## Installation:

```
curl https://raw.github.com/cyounes/csound/master/quickinstall.sh | sh 
```

## Usage: 
```
$ csound [-|+] [value]
```

```
$ csound [value] 
```

```
$ csound [mute | unmute]
```

## Examples:

Examples: 

+ `csound - 10`  : decrease sound of 10% 

+ `csound + 18 ` : increase sound of 18% 

+ `csound 45`    : set sound to 45% 

+ `csound mute`  : mute sound 

+ `csound unmute`: unmute sound

## Github page:
https://github.com/cyounes/csound



