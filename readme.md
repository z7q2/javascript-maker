# javascript-maker
<b>The eternal quest for the perfect javascript maker library</b>

In 1994 my dial-up unix internet provider gave users public www directories. 
Suddenly I was a publisher, designing HTML for lynx and Mosaic, tinkering with cgi scripts.
Then Netscape added scripting, and the web became a place to write programs.
Immediately a war broke out between Javascript and JScript.
Ostensibly a truce was declared with ECMAScript in 1997.
But it's not truly been a joy to program in pure Javascript until ES6 became the norm.
Now you can program Javascript to ES6 specs and pretty much everything will run it, even a rock.

Up to this point, it was necessary to have a library that let you make things in every browser in a common language,
so you didn't have to fork your code in awkward places.
After a messy flirtation with browser detection, we moved sensibly to feature detection, and then wrote libraries to deal with it.

Things like JQuery didn't exist when I started writing browser scripts, 
so I had to study the language and come up with my own **maker libraries**, as I called them.
This library has been written and re-written many times over the years. 
I'm setting out to re-write it yet again, but in a clean ES6 implementation.

Basic syntax:
```
m({});
```
Everything the maker function **m()** does depends on the object you give it. If you give it an empty object, it does nothing.
