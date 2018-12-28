{ "title": "Buidler Basics: Node.js Server Pt. 2: 'GET','POST' & 'OPTIONS'", "date": "2016-04-03" }%%%

The server we built last week had the simple ability to post "Hello World" to the browser window, but what if you wanted to return something more complicated or send data to a database? This would require some sort of method that handles a variety of http requests. Thankfully, in Node we have the ability to take specific requests and handle them in a variety of ways. We'll look at three today, 'GET', 'POST', and 'OPTIONS'.

Node is a RESTful API exactly because it can handle common http requests. In order to handle those requests, we'll need to build up our request handler and give it access to specific actions. Those actions will be stored in a separate reference object like so:

```javascript
var actions = {
  GET: function(req, res) {
    //TODO: Query Database to get requested data
    var dataPulledFromDB = { result: "Here is your requested data!" };
    sendResponse(dataPulledFromDB, headers);
  },
  POST: function(req, res) {
    collectData(req, function(data) {
      //TODO: Insert new data to database and then...
      var successData = { result: "You posted some data!" };
      sendResponse(successData, headers, 201);
    });
  },
  OPTIONS: function(req, res) {
    sendResponse(res, null);
  }
};
```

You may have noticed, we now have two other http requests, 'POST', and 'OPTIONS', but how can we access this object using the previous request handler function from last week? We will need to evaluate the incoming request methods against the actions stored in our new object.

```javascript
var requestHandler = function(request, response) {
  if (actions[request.method]) {
    var action = actions[request.method];
    action(request, response);
  } else {
    sendResponse(res, { error: "NOT FOUND" }, 404);
  }
};
```

The request hanlder now checks the actions object for the method. If it is found, it is invoked with the incoming information. The correct method then takes over. You may also have noticed some other new functions and variables called in these new http actions. First, we now have a collectData function.

```javascript
var collectData = function(req, cb) {
  var data = "";
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    cb(JSON.parse(data));
  });
};
```

The 'POST' action calls this collectData function seen above which takes the data of the request in chunks and concatenates it into a string before parsing the data into JSON and running a callback on that data. This callback structure allows for all data to be collected before the server attempts to act on it.

```javascript
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};
```

The 'headers' object above specifies access control and the data format of our responses. The access-control properties will enable 'CORS' or Cross Origin Resource Sharing. By default 'OPTIONS' requests are not allowed, but these requests can be granted to share access with other applications. This allows for requests from other origins (those not hosted by your server) to access data through your server.

```javascript
var sendResponse = function(res, data, statusCode) {
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(data));
};
```

Lastly, you may have also noticed the sendResponse function in each http action above. This is simply a way to write less code. Every action needs to call 'res.writeHead' and 'res.end'. This helper function allows us to pass the statusCode in where necessary and write less code in each action. Below you can find our more powerful server in its entirety! We can now handle 'GET', 'POST', and 'OPTIONS' requests. This server is now ready to be hooked up to a database.

```javascript
var http = require("http");

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

var sendResponse = function(res, data, statusCode) {
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(data));
};

var collectData = function(req, cb) {
  var data = "";
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    cb(JSON.parse(data));
  });
};

var actions = {
  GET: function(req, res) {
    //TODO: Query Database to get requested data
    var dataPulledFromDB = { result: "Here is your requested data!" };
    sendResponse(dataPulledFromDB, headers);
  },
  POST: function(req, res) {
    collectData(req, function(data) {
      //TODO: Insert new data to database and then...
      var successData = { result: "You posted some data!" };
      sendResponse(successData, headers, 201);
    });
  },
  OPTIONS: function(req, res) {
    sendResponse(res, null);
  }
};

var requestHandler = function(request, response) {
  if (actions[request.method]) {
    var action = actions[request.method];
    action(request, response);
  } else {
    sendResponse(res, { error: "NOT FOUND" }, 404);
  }
};

var ip = "127.0.0.1";
var port = 3000;
var server = http.createServer(requestHandler);

server.listen(port, ip);
```
