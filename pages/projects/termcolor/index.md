---
title: Termcolor Library
description: "C library used for ANSII Color formatting for Linux/Mac terminal output"

---



Is a C library used for ANSII Color formatting for Linux/Mac terminal output.


* [Installation](#installation)
* [Termcolor users documentation](#termcolor-users-documentation) &larr; &hearts;
* [Termcolor developers documentation](#termcolor-developers-documentation)

![Termcolor Library](https://raw.github.com/cyounes/termcolor/master/examples/example_termcolor.png) 

<h2><a name="installation">Installation: </a></h2>
There are two ways to install `termcolor.h` library:

### 1. Install into gcc includes folder :
&rarr; ```need root permissions```

```
curl https://raw.github.com/cyounes/termcolor/master/quickinstall.sh | sh 
```
include it in your code:

```
#include <termcolor.h>
```

### 2. download termcolor.h in your project folder:  
get `termcolor.h` file:

```
curl -O https://raw.github.com/cyounes/termcolor/master/termcolor.h 
```
include it in your code then start use the libray :)

```
	#include "termcolor.h"
```

<h2><a name="termcolor-users-documentation">Termcolor users documentation:</a></h2>

`cprint()` function facilitates the use of the **termcolor** library, the programer needs to know just some tags to get a good results. So to get a good results you must be **OK** to use `cprint()` instead of `printf()` :P

* Example 1: 

	```
	cprint("${bd}Hello world!${/bd}\n");
	```

In this example, the `${bd}` tag tells the program to **START** showing text in bold and the `${/bd}` tag tells the program to **STOP** showing text in bold.

* Example 2:


	```
	cprint("${ul}Hello world!${/ul}\n");
	```

In the second example, the `${ul}` tag tells the program to **START** underlining text and the `${/ul}` tag tells the program to **STOP** underlining the text.

### Easy to use?
The principle of using this function is roughly the principle of html tag, every time you open a tag you must close it after inserting a code.
Except it is not quite the same, as you will see in the following examples…

### Tags:

#### Text decoration
```
**Tag name:** | **What it does:**
------------- | ----------------
${bd}         | Start Bold
${/bd}        | Stop Bold
${ul}         | Start Underline
${/ul}        | Stop underline
${bl}         | Start blink
${/bl}        | Stop blink
```

#### Colors:

##### Effects: 

Tag name:	|	What it does:
----------- | ------------------------------------------------
${rv} 		| reverse colors
${/rv}		| stop reversing colors
${bi}		| use high intensity for background color
${/bi}		| stop using high intensity for background color
${fi}		| use high intensity for foreground color
${/fi}		| stop using high intensity for foreground color
---------------------------------------------------------------

##### Foreground and Background colors:

###### Background color tags: 

Tag name: 	|	What it does:
----------- | -------------------------		
${bb}		| Black background
${rb}		| Red background
${gb}		| Green background
${yb}		| Yellow background
${ub}		| Blue background
${mb}		| Magenta background
${cb}		| Cyan background
${wb}		| White background
${/bg} 		| Stop using background
---------------------------------------

###### Foreground color tags:

Tag name: 	|	What it does:
----------- | -------------------------	 
${bf}		| Black foreground
${rf}		| Red foreground
${gf}		| Green foreground
${yf}		| Yellow foreground
${uf}		| Blue foreground
${mf}		| Magenta foreground
${cf}		| Cyan foreground
${wf}		| White foreground
${/fg}		| Stop using foreground
----------------------------------------

### autoResetStyle(): 

This function has one `BOOLEAN` argument, when it take the `TRUE` variable, you need to restart all effects and decoration you did in the previous `cprint()`.
Otherwise, if you forget to close the tags in the previous `cprint()` , the next one continue applying all the effects and decorations that you have forgot to close.

* Example:

	* _auto reset_ :
	
	```
	autoResetStyle(TRUE);
	cprint("${bd}Hello ");
	cprint("world\n");
	```

  this will display **Hello** in bold and world in normal weight.

	* _don't auto reset_ :
	
	```
	autoResetStyle(FALSE);
	cprint("${bd}Hello ");
	cprint("world\n");
	```
	
  this will display both **Hello** and **world** in bold
	
### cprint() and variables:
Currently, `cprint()` ~~must exactly take one arguments (char *)~~ takes more than one argument, 
however it takes only the `int %d` , `char %c` and strings `char * %s` , it may prints anything wrong
if you give a long or float argument.
in the next versions may be developed to take all the data types possible which is the case of `printf()` .

So to print a variable of another data type using effects,
you must disable `auto reset` by doing : `autoResetStyle(FALSE);`
then put the printf(args) between tow cprint()s.
#### Example: 

```
	long a=10, b=10;
	autoResetStyle(FALSE);
	cprint("a = ${bd} }
	printf("%ld",a);
	cprint("${/bd} b= ${bd}");
	printf("%ld, b);
	cprint("${/bd}\n");
```

<h2><a name="termcolor-developers-documentation">Termcolor developers documentation:</a></h2>
### Available Colors:
 `BLACK` `RED` `GREEN` `YELLOW` `BLUE` `MAGENTA` `CYAN` `WHITE`


### BOOLEAN ?
By including **termcolor** library in your code, you don't need to include the ~~**stdbool**~~ library. However you need to write the boolean keywords in uppercase characters:  ***TRUE***  and ***FALSE*** 

### Functions:

#### Colors: 

+ `bgColor(COLOR)` : set the background color using the available colors.

+ `fgColor(COLOR)` : set the foreground color using the available colors.

for `bgColor(COLOR)` and `fgColor(COLOR)` functions use the variable `DEFAULT`as parameter to reset the default color:
```
	bgColor(DEFAULT);
	fgColor(DEFAULT);
```
#### Text decorations:

+ `textBold(BOOLEAN)` : enable or disable text bolding for the next output:
``` 
		textBold(TRUE); 
		textBold(FALSE);
```

+ `textBlink(BOOLEAN)` : enable or disable text blinking for the next output:
``` 
		textBlink(TRUE); 
		textBlink(FALSE);
```

+ `colorReverse(BOOLEAN)`: enable or disable colors reversing for the next output:
``` 
		colorReverse(TRUE); 
		colorReverse(FALSE);
```

+ `textUnderline(BOOLEAN)`: underline text

+ `highFgIntensity(BOOLEAN)` : Use High Intensity for foreground colors.

+ `highBgIntensity(BOOLEAN)` : Use High Intensity for background colors.

+ `setStyle()` : Usually the programer don't need to invoke this function, it will be invoked automatically by the other functions each time you change the style.

+ `resetStyle()` : Reset all colors and decorations by default!, i suggest to invoke this function at the end of your main to restore all as default.

### Examples:
##### Red Background:

<pre>
	bgColor(RED);
	printf("text with RED Background");
</pre>
######Result:
![termcolor red background](https://raw.github.com/cyounes/termcolor/master/examples/red_background.png) 
-
##### Default background + Red foreground:

<pre>
	bgColor(DEFAULT);
	fgColor(RED);
	printf("text with RED Foreground");
</pre>
######Result:
![termcolor red foreground](https://raw.github.com/cyounes/termcolor/master/examples/red_foreground.png)
-
##### Yellow text on red background:

<pre>
	bgColor(RED);
	fgColor(YELLOW);
	printf("YELLOW text in RED Background");
</pre>
######Result:
![Yellow text on red background](https://raw.github.com/cyounes/termcolor/master/examples/yellow_in_red.png)
-
##### Yellow Bold text on red background:

<pre>
	bgColor(RED);
	fgColor(YELLOW);
	textBold(TRUE);
	printf("YELLOW and BOLD text in RED Background");
</pre>
######Result:
![termcolor Yellow Bold text on red background](https://raw.github.com/cyounes/termcolor/master/examples/bold_yellow_in_red.png)
-
##### Yellow, Bold and underlined text on red background:

<pre>
	bgColor(RED);
	fgColor(YELLOW);
	textBold(TRUE);
	textUnderline(TRUE);
	printf("YELLOW and BOLD text in RED Background");
</pre>
######Result:
![termcolor Yellow, Bold and underlined text on red background](https://raw.github.com/cyounes/termcolor/master/examples/bold_yellow_underline.png)
-

##### High Intensity: Yellow Bold text on red background:

<pre>
	bgColor(RED);
	fgColor(YELLOW);
	textBold(TRUE);
	highFgIntensity(TRUE);
	highBgIntensity(TRUE);
	printf("YELLOW and BOLD text in RED Background");
</pre>
######Result:
![termcolor High Intensity: Yellow Bold text on red background](https://raw.github.com/cyounes/termcolor/master/examples/high_intens.png)
-

##### Reversed colors:

<pre>
	bgColor(DEFAULT);
	fgColor(DEFAULT);
	textBold(TRUE);
	textUnderline(TRUE);
	printf("REVERSED test with default foreground and default background :)");
</pre>
######Result:
![termcolor Reversed colors](https://raw.github.com/cyounes/termcolor/master/examples/reversed_colors.png)
-

##### Main Example:

<pre>
#include <stdio.h>
#include "termcolor.h"

int main() {

	printf("Hi, Thanks for trying termcolor library :) \n" );
	printf("Using this library allow the developer to decorate \
the output of its console application.\n\n");
	printf("Some Examples: \n\n");
	
	bgColor(RED); // Background RED and not "RED" !
	printf("text with RED Background\n\n");
	bgColor(DEFAULT); // Default Background Color
	fgColor(RED); // RED Foreground color 
	printf("text with RED Foreground\n\n");
	bgColor(RED);
	fgColor(YELLOW);
	printf("YELLOW text in RED Background\n\n");
	textBold(TRUE); // Bold Text
	printf("YELLOW and BOLD text in RED Background\n\n");
	textUnderline(TRUE); // Underlined text 
	bgColor(DEFAULT);
	printf("YELLOW and BOLD and Underlined text\n\n");
	fgColor(DEFAULT);
	colorReverse(TRUE);
	printf("REVERSED test with default foreground and default background :)\n\n");
	colorReverse(FALSE);
	textBlink(TRUE);
	printf("BLINKING text with default foreground and default background\n\n");
	
	resetStyle(); // Reset all as default 
	printf("Now Examples using High Intensity\n\n");
	highFgIntensity(TRUE);
	highBgIntensity(TRUE);
	bgColor(RED);
	printf("text with RED Background\n\n");
	bgColor(DEFAULT);
	fgColor(RED);
	printf("text with RED Foreground\n\n");
	bgColor(RED);
	fgColor(YELLOW);
	printf("YELLOW text in RED Background\n\n");
	textBold(TRUE);
	printf("YELLOW and BOLD text in RED Background\n\n");
	
	resetStyle();
	printf("Simple Text :D \n\n");
	
    return 0;
}

</pre>
######Result:
![termcolor Reversed colors](https://raw.github.com/cyounes/termcolor/master/examples/example_termcolor.png)
-

## TODO:
* insert horizontal line with specified color.
* Text align : [Left ; Center ; Right ].
* Text Border.
* add availability to `cprint()` to take more than one argument.

### Fork me on GitHub:

I'll be very happy to take pull requests from others, Go ahead and fork me.

### License: 
See LICENSE 


###Who are you?
My name is [Younes Cheikh][1] C-addicted, student and desktop applications developer, follow me on [twitter][2] or visite my [personal website][3] :)


[1]: http://github.com/cyounes/        "c.Younes on github"
[2]: http://twitter/cyounes  "@cyounes"
[3]: http://cyounes.com/    "personal website"

