{ "title": "Buidler Basics: Node.js Pt. 1.5", "date": "2016-03-23" }%%%

This morning I wrote about setting up a basic server and how to build a very basic response to a 'GET' request using the 'http' module that is part of the node library. Tonight, I'm going to take a brief look at another useful module, 'url', which helps break apart a url and route your requests to the proper location.

"url" is incredibly useful for a number of reasons, but I'm going to focus on one for the time being. To use the module, you must first require it like so:

```javascript
var url = require("url");
```

You then have access to a few helpful methods, one of which is `.parse`. This is the one we will look at in this post. `url.parse()` returns an object with a number of properties based on the url that is attached to a request. Every request has a .url property and often contains important information that will need to be read and handled by the server.

To access this information in the handler you would need to write something like this:

```javascript
var parsedUrl = url.parse(request.url);
```

You then have an object with all the properties of that url including really useful .pathname.

```javascript
var pathname = parsedUrl.pathname;
```

With the pathname you could then point the request to any number of locations to handle whatever you decide should happen at that pathname. Below is a basic representation of what happens in the comments:

```javascript
// access to url methods
var url = require("url");
// request.url = "http://somesite.com/pictures/friends"
var parsedUrl = url.parse(request.url);
/_
parsedUrl = {
protocol: 'http:',
slashes: true,
host: "somesite.com",
pathname: "/pictures/friends"
}
_/
var pathname = parsedUrl.pathname;
// pathname = "/pictures/friends"
```

"url" has a few other useful methods like formatting a string from an object (reversing parse), but this basic parse function will be very helpful in building our basic node server in the coming days!
