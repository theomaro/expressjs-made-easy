# Express.js Made Easy

This is a comprehensive and up-to-date Node.js tutorial documentation for JavaScript back-end developers

## RESTful Services with Express

Express is a fast and lightweight framework for building web applications

[Home](../README.md) / [Getting Started](./getting-started.md) / [RESTful Services](./restful-intro.md) / Introducing Express / [Basic routing](./basic-routing.md) / [Serving static files](./serving-static-files.md)

### Introducing Express

The Express framework gives our application a proper structure, so we can easily add more routes while keep our application code maintanable.

The express app object has bunch of methods that correspond to http methods

```js
app.get(); // for handling http GET request
app.post(); // for handling http POST request
app.put(); // for handling http PUT request
app.delete(); // for handling http DELETE request
app.all(); // for handling all request
app.use(); // for adding middlewere
app.listen(); // listening to the incoming request
```

> > Serving regular website pages

```js
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
```

> > Serving the API endpoints

```js
app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, uname: "josMe" },
    { id: 2, uname: "amJ" },
    { id: 3, uname: "Theo" },
  ]);
});
```

### Enviroment Variables

An enviroment variable is basically a variable that is part of enviroment in which a process runs. Its value is set outside the node application.

- In node applications, we have this enviroment variable called `PORT`. To read it value we use a process object

  ```js
  const PORT = process.env.PORT || 3000;
  ```

### Route Parameters

Route parameters are parameters added to url after `/:` to provide essential or required values

> > get a single parameter

```js
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  res.send("GET posts by id");
});
```

Example url : `localhost:3000/api/posts/1`

> > get multiple parameters

```js
app.get("/api/posts/:year/:tag", (req, res) => {
  const { year, month } = req.params;

  res.send("GET posts by year and tag");
});
```

Example url : `localhost:3000/api/posts/:2022/:node`

`NOTE`: If user does not provide the route parameter, the request will be handled by the main route i.e /api/posts

### Query Strings

Query strings are params added to url after `?` to provide optional data for our backend services

> > get a query string

```js
app.get("/api/posts/?searchTerm", (req, res) => {
  const { searchTerm } = req.query;

  res.send("GET posts by search term");
});
```

Example url : `localhost:3000/api/posts/?searchTerm=nodejs`

> > get multiple query strings

```js
app.get("/api/posts/?searchTerm&sortBy", (req, res) => {
  const { searchTerm, sortBy } = req.query;

  res.send("GET posts by search term and sort the by date they're created");
});
```

Example url : `localhost:3000/api/posts/?searchTerm=node&sortBy=date_created`

`NOTE`: If user does not provide the route parameter, the request will be handled by the main route i.e /api/posts
