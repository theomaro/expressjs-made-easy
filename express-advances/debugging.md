# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## Express - Advanced Concepts

In this section, will look more advanced concepts like middleware, configuration, debugging, template engine and more...

[Home](../README.md) / [Middleware](./middleware.md) / [Configuration](./configuration.md) / Debugging / [Template Engine](./template-engines.md) / [Database Integration](./database-integration.md)

### Debugging

The better way log messages for the purpose of debugging is to use the debug package.

- We can also use an enviroment variables to enable or disable debugging.
- We can also determine the level of debugging information we want to see.

#### Setting Configuration Setting

```js
import debug from "debug";

const startupDebugger = debug("app:startup");
const dbDebugger = debug("app:db");

if (app.get("env") === "development") {
  startupDebugger("Morgan enabled");
}

// DB work
dbDebugger("Connected to the database...");
```

#### OPTION 1 : Setting enviroment variable

We can use `export` command to set the debugging enviroment variable

- Show only the debugging messages that are part of given name sapace

  ```zsh
  $ export DEBUG=app:startup
  ```

- Show debugging messages for multiple namespaces

  ```zsh
  $ export DEBUG=app:startup,app:db
  ```

- Show all debugging messages at giben namespace

  ```zsh
  $ export DEBUG=app:*
  ```

- Prevent showing any debugging messages

  ```zsh
  $ export DEBUG=
  ```

#### OPTION 2 : Setting enviroment variable

We can optionally set the debugging enviroment variable at the time of running our application. This will debug and at the same time run our application

- Show only the debugging messages that are part of given name sapace

  ```zsh
  $ DEBUG=app:startup node index..js
  ```

- Show debugging messages for multiple namespaces

  ```zsh
  $ DEBUG=app:startup,app:db node index.js
  ```

- Show all debugging messages at giben namespace

  ```zsh
  $ DEBUG=app:* node app.js
  ```

- Prevent showing any debugging messages

  ```zsh
  $ DEBUG= node index.js
  ```
