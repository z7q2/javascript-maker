# javascript-maker
**The eternal quest for the perfect javascript maker library**

In 1994 my dial-up unix internet provider gave users public www directories. 
Suddenly I was a publisher, designing HTML for lynx and Mosaic, tinkering with cgi scripts.
Then Netscape added scripting, and the web became a place to write programs.
Immediately a war broke out between Javascript and JScript.
ECMAScript was supposed to bring order to things.
But it took ES6 becoming normalized to make pure Javascript fun to write.
Now you can program Javascript to ES6 specs and pretty much everything will run it, even a rock.

Up to this point, it was necessary to have a library that let you make things in every browser in a common language,
so you didn't have to fork your code in awkward places.
After a messy flirtation with browser detection, we moved sensibly to feature detection, and then wrote libraries to deal with it.
At one point I was writing code that had to work on Netscape 4 and 6, IE5, IE5 for Mac, and WebTV. It was fun.

Things like jQuery didn't exist when I started writing browser scripts, 
so I had to study the language and come up with my own **maker libraries**, as I called them.
This library has been written and re-written many times over the years. 
I'm setting out to re-write it yet again, but in a clean ES6 implementation.

Everything the maker function **m()** does depends on what you give it. If you give it nothing, it returns undefined.
```
m();
> undefined
```


If you provide a string, the function returns an object created with that string.
```
m("div");
> <div></div>
```

This can be any object.
```
m("foo");
> <foo></foo>
```
