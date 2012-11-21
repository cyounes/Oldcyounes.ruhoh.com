---
title: Home
description:
---

<img style="float: right; margin: 10px" src="{{urls.media}}/cyounes_new.png" />

Hi, My name is Younes and i’m a programmer and a blogger, also known online as [cYounes][1]. I started my computing career in 2001 when i had my first personal computer. Currently staying in france and studying computer sciences.

I setup this website mainly to distribute information to my friends and collect experiences with webpage programing.

I am a person who has high passion in programing and development, and have been loving every minute of it, one of my dreams is to master all the development technologies and become one of the top developers in the world, and now, i am working toward it!

knowledge of: C/C++, OCaml, Java, Python, SQL, Shell Script, html, CSS, XML

interested in:  ![\LaTeX][2], Ruby, Awk

 [1]: http://www.google.com/#q=cYounes
 [2]: http://s.wordpress.com/latex.php?latex=%5CLaTeX&bg=222222&fg=ffffff&s=0 "\LaTeX"

---------------------------
# What can you find here?

I'm not a perfectionist in this regard however, i just want to share my knowledge with you, computer programming, softwares, tutorials and more stuff. Also in [this page](/projects), you find some open source projects that I have developed.

---------------------------

# Latest Posts

{{# posts_latest }}
<div class="post">
  <h3 class="title"><a href="{{url}}">{{title}}</a> <span class="date">{{ date }}</span></h3>

 <!-- {{{ summary }}} -->

  <div class="more">
    <!-- <a href="{{url}}" class="btn">read more..</a> -->
  </div>
</div>
{{/ posts_latest }}
