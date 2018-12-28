{ "title": "Buidler Basics: Node.js Server Pt. 1", "date": "2016-03-23" }%%%

Time got away from me last week, but I'm kicking off my first series in a collection called "Builder Basics". Today, I'll be building a Node.js server that I can host locally and simply returns "Hello World!" to the screen. In the following posts, I will go through how to handle basic requests like "GET" and "POST" and even some server testing.

First, in order to build a successful server like I'll build today, we will need [node.js](https://nodejs.org/en/) Once this dependency is in place, we simply need to open up a new javascript directory and create a new javascript file. In this case, I created a file called testServe.js.

In the file, the first line of code for the basic server is:

```javascript
var http = require("http");
```

This simple line tells node that you need the "http" module. This "require" word allows you to pull from the node library and use prebuilt code to construct the server. Once you have required "http" you can then use it and all its methods, but first we need to specify where we will use it. Every server needs an ip address and a port to access the address. You can think of the ip address like the address to a mall, and ports like the multiple entrances that give you access. Sometimes only certain ports are open.

```javascript
var ip = "127.0.0.1";
var port = 3000;
```

After specifying the location, you'll want to actually create the server with the http method aptly named "createServer".

```javascript
var server = http.createServer(requestHandler);
server.listen(port, ip);
```

We also need to add a .listen method and pass in our "port" and "ip" from above. Now, you may have noticed that the server takes a parameter that handles requests. This is a callback function that should take two parameters, "request" and "response". I could simply pass in an anonymous function, but because next week I will need a more powerful handler, I'm going to create a separate function.

```javascript
var requestHandler = function(request, response) {
  response.end("Hello World!");
};
```

Now this handler is bare bones, it simply takes any request at the specified port and returns the text "Hello world!" Every response needs to have a ".end" no matter what request comes into the server. Today, to add a little more filtration I'm going to only respond to "GET" requests and I'm going to add a header to my response.

```javascript
var requestHandler = function(request, response) {
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("NOT FOUND");
  }
};
```

Each .writeHead method returns a header on the http message that is sent back to the client making the request. Headers give important details about the response like status code and content-type. In this case, if they sent a "GET" request they recieve the plain text message "Hello World!", and a status code 200. If they do anything else, the get "NOT FOUND" and 404. Let's take a look at how our code looks all together.

```javascript
var http = require("http");

var requestHandler = function(request, response) {
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("NOT FOUND");
  }
};

var ip = "127.0.0.1";
var port = 3000;
var server = http.createServer(requestHandler);

server.listen(port, ip);
```

Above you can see the finished product. I can now spool up my server on the local host by opening the directory in the command line and typing "node testServe.js". If I then navigate to 127.0.0.1:3000 in my browser, I can see "Hello World!"

I hope you enjoyed how to setup a bare bones basic Node server! I'm looking forward to next week when we'll give this server more power. Let me know what you think below!
