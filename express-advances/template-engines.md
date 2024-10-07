# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## Express - Advanced Concepts

In this section, will look more advanced concepts like middleware, configuration, debugging, template engine and more...

[Home](../README.md) / [Middleware](./middleware.md) / [Configuration](./configuration.md) / [Debugging](./debugging.md) / Template Engine / [Database Integration](./database-integration.md)

### Template Engine

We use template engines to return HTML markup to a client. The most popular template engines for Express applications are `Pug`, `Mustache`, `EJS`. Each template engine has different syntax for generating dynamic HTML and return it to a client

#### Generating Template engine : Pug

- Create a `views` folder

  ```zsh
  $ mkdir views; cd views
  ```

- create an `index.pug` file for holding our HTML templates

  ```pug
  html
      head
          title= title
      body
          h1: message
  ```

- Set view engine for our application

  ```js
  app.set("view engine", "pug");
  app.set("views", "./views"); // default
  ```

- rendering HTML template to a client

  ```js
  app.get("/", (req, res) => {
    res.render("index", { title: "Homepage", message: "Hello" });
  });
  ```

<!-- TODO:  -->

#### Generating Template engine : EJS

#### Generating Template engine : Handlebar
