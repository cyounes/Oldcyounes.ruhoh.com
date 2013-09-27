---
title:
date: '2012-10-03'
description: "Mini-Tutorial explains how to install [typeScript][2] on Mac OS X easily "
categories: Tutorials  
tags: [ typescript, mac ] 
---


![typescript]({{ urls.media }}/typescript1.jpg)


This article explains how to install [TypeScript][2] on Mac OS X easily.

The following steps are tested on OS X Mountain Lion 10.8.2 

## 1. install [Homebrew][3]:

<pre>
$ ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"
</pre>

## 2. Install [nodejs][4] using home-brew:
<pre>
$ brew install nodejs
</pre>

## 3. get and install npm:
<pre>
$ curl https://npmjs.org/install.sh | sh
</pre>

![]({{ urls.media }}/install_npm.png)

## 4. get TypeScript:
<pre>
$ npm install -g typescript
</pre>

![]({{ urls.media }}/install_typescript.png)
## 5. Test TypeScript:

In your editor, type the following JavaScript code in greeter.ts:
<pre>
function greeter(person) {
  return "Hello, " + person;
}    
var user = "Jane User";   
document.body.innerHTML = greeter(user);
</pre>    
    

## 6. Compile the code:

At the command line, run the TypeScript compiler:
<pre>
$ tsc greeter.ts
</pre>

The result will be a file greeter.js which contains the same JavaScript that you fed in.

 [1]: http://cyounes.com/new/how-to-install-typescript-on-mac-os-x
 [2]: http://www.typescriptlang.org/ "TypeScript"
 [3]: http://mxcl.github.com/homebrew/
 [4]: http://nodejs.org
 [5]:
 [6]: 

By Younes Cheikh
