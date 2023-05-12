# javascript-maker

### The eternal quest for the perfect javascript maker library

In 1994 my dial-up unix internet provider gave users public www directories. 
Suddenly I was a publisher, designing HTML for lynx and Mosaic, tinkering with cgi scripts.
Then Netscape added scripting, and the web became a place to write programs.
Immediately a war broke out between Javascript and JScript.
ECMAScript was supposed to bring order to things.
But it took ES6 becoming normalized to make pure Javascript fun to write.
Now you can program Javascript to ES6 specs and pretty much everything will run it, even a rock.

During the 20-odd years between Javascript 1.0 and ES6, it became necessary to have some kind of library that let you make things in every browser in a common language,
so you didn't have to put many conditions in your code in awkward places.
After a messy flirtation with browser detection, I moved sensibly to feature detection, and then wrote library functions that hid all the messy browser compatibility code behind tidy, short function calls.
At one point I was writing code that had to work on Netscape 4 and 6, IE6, IE5 for Mac, AOL, and WebTV, while Chrome was still an unborn demon lurking within an obscure browser called Konqueror. 
It was interesting.

Things like jQuery didn't exist when I started writing browser scripts, 
so I had to come up with my own **maker libraries**, as I called them.
The main purpose of these libraries was to make, change and remove DOM objects on the web page without a trip back to the server.
This was considered fancy business back in y2k, if you could get it to work in every browser.
Using these libraries gradually coerces the input for them to defining web page elements with a JSON-style syntax.
In fact an end goal of developing this particular version of the library is to parse JSON into web pages.

This library has been written and re-written many times over the years. 
This re-write will be in a clean ES6 implementation. It's also my first public GitHub project, so I'm using it to learn how to git.

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

To do anything more complex requires an object as the first parameter.

The `m` key is used to make a new object. The behavior is similar to passing a string as the first parameter.
```
m({m:"p"});
> <p></p>

m({m:"¿que?"});
> undefined
```

The `g` key is used to get existing objects using a css selector value. If one object is found, it is returned. If more than one object is found, the last object found is returned.
```
m({g:"#p1"});
> <p id="p1">Sample text.</p>

m({g:"p"});
> <p id="p2">More sample text.</p>
```

If the css selector finds nothing, false is returned.
```
m({g:"foo"});
> false
```

If the css selector is bogus, undefined is returned.
```
m({g:"%rg"});
> undefined
```

The `i` key is used to add an id to an object. If you're using the `m` key, the new object gets the id.
```
m({m:"p",i:"p2"});
> <p id="p2"></p>
```

If you're using the `g` key, the selected object gets the id. If the object already has an id, it is replaced with the new value.
```
m({g:"#p1",i:"p4"});
> <p id="p4">Sample text.</p>
```

If the `g` key has selected more than one object, all selected objects will get the new id. The last object found is returned with the new id.
```
m({g:"p",i:"p5"});
> <p id="p5">More sample text.</p>
```

The `t` key is used to add a text node to an object.
```
m({m:"p",t:"Even more sample text."});
> <p>Even more sample text.</p>
```

These and other keys can be used in combination.
```
m({m:"p",i:"p2",t:"Lots of sample text."});
> <p id="p2">Lots of sample text.</p>
```

As before, to attach the new object to existing DOM objects, provide a css selector as a second parameter.
```
m({m:"p",i:"p3",t:"Even more sample text."},"body");
> <p id="p3">Even more sample text.</p>

m({m:"p",t:"Button text."},"button");
> <p>Button text.</p>
```

<img src="https://z7q4.com/tbc.jpg" alt="To Be Continued" style="height:100px;width:325px;"/>

<!-- A typical use case for the `g` key is to modify the selected objects. -->
