# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## RESTful Services with Express

Express is a fast and lightweight framework for building web applications

[Home](../README.md) / Getting Started / [RESTful Services](./restful-intro.md) / [Introducing Express](./express-intro.md) / [Basic routing](./basic-routing.md) / [Serving static files](./serving-static-files.md)

### Getting Started

#### Installation

- create a working directory `express-app` to hold your application

  ```sh
  $ mkdir express-app
  $ cd express-app
  ```

- create a `package.json` file for your application

  ```sh
  $ npm init -y
  ```

- install `express` in your working directory as a the application dependencies

  ```sh
  $ npm install express
  ```

#### Building First Web Server with Express

This is essentially the simplest, single-file Express app you can create.

- The app starts a server and listens on port 3000 for connections.

  ```js
  // load an express module in your app
  const express = require("express");
  const app = express();

  const port = 3000;
  const hostname = "127.0.0.1";

  // define a routes/endpoints
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // listen at a given port for incoming requests
  app.listen(port, hostname, function () {
    console.log(`Server is running at ${hostname}:${port}`);
  });
  ```

- Run the app locally, then, load `http://localhost:3000/` in a browser to see the output.

  ```sh
  $ node app.js
  ```

`NOTE` The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a _404 Not Found_.
