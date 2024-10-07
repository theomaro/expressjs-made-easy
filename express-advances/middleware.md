# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## Express - Advanced Concepts

In this section, will look more advanced concepts like middleware, configuration, debugging, template engine and more...

[Home](../README.md) / Middleware / [Configuration](./configuration.md) / [Debugging](./debugging.md) / [Template Engine](./template-engines.md) / [Database Integration](./database-integration.md)

### Middleware

`Middleware` or middleware function is one of core concepts in express you should learn.

- It is a function that executes during a request to the server, each midleware has access to request and response object

- It is basically a function that request object and either return response to a client or passes the control to another middleware function

#### Request Processing Pipeline

What is happening at runtime??

- When a request is received on the server, that request goes throught this pipeline, called `Request Processing Pipeline`.

- In this pipeline we have one or more middleware function, each either

  1.  Terminate the request-response cycle by returning a response object or

  2.  Pass a control to another middleware function

#### Example of middlewares

- The `express.json()` method is another example of a midddleware function.

- it reads request object, if there is json object in the body of request object, it will pass the body into json() and populate a req.body property

  ```js
  app.use(express.json());
  ```

`NOTE` This method does not terminate a request-response cycle, so it then pass control to another middleware function i.e route() handler

- In express, every router handler function is technically a middleware function. It takes a request object and return a response to a client. Hence terminate a request-response cycle.

  ```js
  app.get("/,", function (req, res) {
    res.send("Hello");
  });
  ```

#### Custom Middleware function

Expression allows us to create custom middleware function that we can put at the front of our request-processing-pipeline. So, every request we get on the server will go throught our middleware function.

> > Creating a custom middleware function

```js
// middleware/logger.js
export default logger = (req, res, next) => {
  // => perform logging tasks

  console.log("Logging...");
  next(); // pass it on to the next middleware function
};
```

`NOTE` Unless explicitly you are sending response yourself, it is the best practise to pass on your middleware function to the next() middleware function

```js
// middleware/authenticate.js
export default authenticate (req, res, next) {
  // => perform authentication task

  console.log("Authenticating...");
  next(); // pass it on to the next middleware function
};
```

`NOTE`: As the best practice, put each middleware function in separate module or file inside middleware folder

> > Using a custom middleware function manually to a specific router handler

```js
// app.js
import express from "express";
import logger from "./middleware/logger.js";

const app = express();

app.get("/", logger, (req, res) => res.send("Home"));
app.get("/about", logger, (req, res) => res.send("About Us!"));
```

> > Using a custom middleware function to a all router handler

```js
// app.js
import express from "express";
import logger from "./middleware/logger.js";

const app = express();

app.use(logger); // register a middleware to all router handler

app.get("/", (req, res) => res.send("Home"));
app.get("/about", (req, res) => res.send("About Us"));
```

> > Using a custom middleware to a specific routes

```js
// app.js
import express from "express";
import logger from "./middleware/logger.js";

const app = express();

app.use("/api", logger); // register a middleware only to all `/api` routes

// logger middleware will not be applied to these routes
app.get("/", (req, res) => res.send("Home"));
app.get("/about", (req, res) => res.send("About Us"));

// logger middleware will only be applied to these routes
app.get("/api/products", (req, res) => res.send("Home"));
app.get("/api/users", (req, res) => res.send("About Us"));
```

> > Using multiple custom middlewares to all routes

With this we can perform cross-cutting concerns such as login, authentication, authorization and so on.

```js
import express from "express";
import logger from "./middleware/logger.js";
import authenticate from "./middleware/authenticate.js";

const app = express();

app.use([logger, authenticate]); // registering multiple middlewares
```

`NOTE` these middleware functions are called in sequence. Middleware function for logging the user is called first, followed by middleware function for authenticating the user. Finally the route handler

> > Using multiple custom middlewares to a single route

```js
import express from "express";
import logger from "./middleware/logger.js";
import authenticate from "./middleware/authenticate.js";

const app = express();

app.get("/api/products", (req, res) => res.send("Home"));
app.get("/api/users/reviews", [logger, authenticate], (req, res) =>
  res.send("User's Reviews")
);
```

#### Built-in Middleware

In express, we have few built-in middleware functions

- `json()`: for handling incoming request with json data inside body of request object and populate req.body property

  ```js
  app.use(express.json());
  ```

- `urlencoded()`: for handling income request with url encoded payloads and populate req.body property

  ```js
  app.use(express.urlencoded({ extended: true })); // key=value&key=value
  ```

- `static()` : for serving static file such as css, html and so on from the route of the site

  ```js
  app.use(express.static("public"));
  ```

#### Third-party Middleware

- `helmet` : help secure your apps by setting various HTTP headers

  ```js
  import helmet from "helmet";
  app.use(helmet());
  ```

- `morgan` : HTTP request logger

  ```js
  import morgan from "morgan";
  app.use(morgan("tiny"));
  ```
