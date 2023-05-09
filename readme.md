# javascript-maker

### The eternal quest for the perfect javascript maker library

In 1994 my dial-up unix internet provider gave users public www directories. 
Suddenly I was a publisher, designing HTML for lynx and Mosaic, tinkering with cgi scripts.
Then Netscape added scripting, and the web became a place to write programs.
Immediately a war broke out between Javascript and JScript.
ECMAScript was supposed to bring order to things.
But it took ES6 becoming normalized to make pure Javascript fun to write.
Now you can program Javascript to ES6 specs and pretty much everything will run it, even a rock.

Up to this point, it was necessary to have a library that let you make things in every browser in a common language,
so you didn't have to put many conditions in your code in awkward places.
After a messy flirtation with browser detection, we moved sensibly to feature detection, and then wrote libraries to deal with it.
At one point I was writing code that had to work on Netscape 4 and 6, IE6, IE5 for Mac, AOL, and WebTV, while Chrome was still an unborn demon lurking within an obscure browser called Konqueror. It was fun.

Things like jQuery didn't exist when I started writing browser scripts, 
so I had to study the language and come up with my own **maker libraries**, as I called them.
This library has been written and re-written many times over the years. 
I'm setting out to re-write it yet again, but in a clean ES6 implementation.

### Reference Implementation

<a href="https://z7q2.azurewebsites.net/javascript-maker/index.html">https://z7q2.azurewebsites.net/javascript-maker/index.html</a>

### Syntax

Everything the maker function **m()** does depends on what you give it. If you give it nothing, it returns undefined.
```
m();
> undefined
```

If you provide a string as the first parameter, the function returns an object created with that string.
```
m("div");
> <div></div>
```

This can be any object...
```
m("foo");
> <foo></foo>
```

...within reason\*. If you provide anything other than lower case a-z (ASCII 97-122), nothing happens and undefined is returned.  
<sub>\*Reason is relative here, as the only technical upper limit to the length of a DOM object name is available memory.</sub>
```
m("boo boo");
> undefined

m("New!");
> undefined
```


If you want to attach this object to another object, provide a css selector as a second parameter. The new object will be attached to the selected object and returned.
```
m("hr","body");
> <hr>
```

If the css selector finds more than one object match, a clone of the new object will be attached to each matched object except the last. The new object will be attached to the last matched object and returned.
```
m("hr","button");
> <hr>
```

If the css selector finds nothing, false is returned.
```
m("hr","foo");
> false
```

If the css selector is bogus, undefined is returned.
```
m("hr","New!");
> undefined
```

To do anything more complex requires an object for input.

The `m` key is used to make a new object. The behavior is similar to passing a string as the first parameter.
```
m({m:"p"});
> <p></p>

m({m:"¿que?"});
> undefined
```

The `i` key is used to add an id to an object.
```
m({m:"p",i:"p2"});
> <p id="p2"></p>
```

The `t` key is used to add a text node to an object.
```
m({m:"p",t:"More sample text."});
> <p>More sample text.</p>
```

These and other keys can be used in combination.
```
m({m:"p",i:"p2",t:"More sample text."});
> <p id="p2">More sample text.</p>
```

As before, to attach the new object to existing DOM objects, provide a css selector as a second parameter.
```
m({m:"p",t:"More sample text."},"body");
> <p>More sample text.</p>

m({m:"p",t:"More sample text."},"button");
> <p>More sample text.</p>
```

The `g` key is used to get existing objects using a css selector value. If one object is found, it is returned. If more than one object is found, they are returned as a node list.
```
m({g:"#p1"});
> <p id="p1">Sample text.</p>

m({g:"button"});
> > NodeList...
```

If the css selector finds nothing, false is returned.
```
m({g:"foo"});
> false
```

<!-- A typical use case for the `g` key is to modify the selected objects. -->
