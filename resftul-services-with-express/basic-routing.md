# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## RESTful Services with Express

Express is a fast and lightweight framework for building web applications.

[Home](../README.md) / [Getting Started](./getting-started.md) / [RESTful Services](./restful-intro.md) / [Introducing Express](./express-intro.md) / Basic routing / [Serving static files](./serving-static-files.md)

### Basic routing

**_Routing_** refers to determining how an application responds to a client request to a particular endpoint(i.e. URI or path) and a specific HTTP request method (GET, POST, and so on).

- when path is matched, the route will execute the handler functions specified.

  ```js
  app.METHOD(Path, RequestHandler);
  ```

Where:

- `app` is an instance of express.
- `METHOD` is an HTTP request method, in lowercase.
- `Path` is a path on the server.
- `RequestHandler` is the call back function executed when the route is matched.

> > Responding to HTTP `GET` request

- Get all courses

  ```js
  app.get("/api/courses", (req, res) =>
    res.send(`Got a GET request at /courses`)
  );
  ```

  Example url : `http://localhost:3000/api/courses`

- Get a specific course by its id

  ```js
  app.get("/api/courses/:id", (req, res) =>
    res.send(`Got a GET request at /courses/:${req.params.id}`);
  );
  ```

  Example url : `http://localhost:3000/api/courses/1`

> > Responding to a HTTP `POST` request

- Create a new course

  ```js
  app.post("/api/courses", (req, res) =>
    res.send("Got a POST request at /courses");
  );
  ```

  Example url : `http://localhost:3000/api/courses`

> > Responding to a HTTP `PUT` request

- update a course by its id

  ```js
  app.put("/api/courses/:id", (req, res) =>
    res.send(`Got a PUT request at /courses/:${req.params.id}`);
  );
  ```

  Example url : `http://localhost:3000/api/courses/1`

> > Responding to a HTTP `DELETE` request

- Delete all courses

  ```js
  app.delete("/api/courses", (req, res) =>
    res.send("Got a DELETE request at /courses");
  );
  ```

  Example url : `http://localhost:3000/api/courses`

- delete specific course by its id

  ```js
  app.delete("/api/courses/:id", (req, res) =>
    res.send(`Got a DELETE request at /course/:${req.params.id}`);
  );
  ```

  Example url : `http://localhost:3000/api/courses/1`
