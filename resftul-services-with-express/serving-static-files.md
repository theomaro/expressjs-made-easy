# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## RESTful Services with Express

Express is a fast and lightweight framework for building web applications

[Home](../README.md) / [Getting Started](./getting-started.md) / [RESTful Services](./restful-intro.md) / [Introducing Express](./express-intro.md) / [Basic routing](./basic-routing.md) / Serving static files

### Serving static files

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

```js
express.static(root, [options]);
```

`NOTE` root argument specifies the root directory from which to serve static assets

- serve static files in a single directory

  ```js
  app.use(express.static("public"));
  ```

`NOTE` the path that you provide to the express.static function is relative to the directory from where you launch your node process

- serve static files in a multiple directory

  ```js
  app.use(express.static("public"));
  app.use(express.static("files"));
  ```

`NOTE` Express will look up the files in the order in which you set

- you can load the files that are in the specified directory

  ```
  http://localhost:3000/images/kitten.jpg
  http://localhost:3000/css/style.css
  http://localhost:3000/js/app.js
  http://localhost:3000/images/bg.png
  http://localhost:3000/hello.html
  ```

- create a virtual path prefix (where the path does not actually exist in the file system) for files that are served

  ```js
  app.use("/static", express.static("public"));
  ```

- load the files with virtual path prefix

```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

- Serving static files outside the working directory

  ```js
  const path = require("path");
  app.use("/static", express.static(path.join(__dirname, "public")));
  ```

`NOTE` use the absolute path of the directory that you want to serve, if you run the express app from another directory
