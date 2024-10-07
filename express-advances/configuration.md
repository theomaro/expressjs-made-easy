# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## Express - Advanced Concepts

In this section, will look more advanced concepts like middleware, configuration, debugging, template engine and more...

[Home](../README.md) / [Middleware](./middleware.md) / Configuration / [Debugging](./debugging.md) / [Template Engine](./template-engines.md) / [Database Integration](./database-integration.md)

### Enviroments

In a more complex application, you need to know what enviroment your code is running on,is it development, testing, staging or production enviroment. This help decide which feature to enable/disable based on the current enviroment.

#### Getting the current enviroment

There are tow methods/options for getting the current enviroment for a given node application.

- using `process.env.NODE_ENV`: return undefined if no enviroment is defined explicitly

  ```js
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  ```

- using `app.get('env`)`: return development enviroment as a default if no enviroment is defined explicitly

  ```js
  import express from "express";

  const app = express();
  console.log(`app: ${app.get("env")}`);
  ```

#### How to set enviroment variable

We can explicitly set the enviroment we want to run our node application by setting value of enviroment variable `NODE_ENV` on machine that node app is running.

- on macOS or Linux

```zsh
export NODE_ENV=production
```

- on windows

```zsh
set NODE_ENV=production
```

#### How to work with Enviroment

For example, enabling the logging of http request only on development enviroment.

- Enabling morgan logging feature on development only

  ```js
  import morgan from "morgan";

  if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("Morgan enable...");
  }
  ```

### Configuration

This section is about how we can store the configuration setting for our node application and overidding them in each enviroment.

For example, we may use different database or mail server on development and on production

#### Creating configuration files

- create a `config` folder

  ```zsh
  $ mkdir config ; cd config

  ```

- create a `default.json` file to store all default configurations.

  ```json
  {
    "name": "Name of our Express App"
  }
  ```

- create a `development.json` file to store all configurations specific to development enviroment.

  ```json
  {
    "name": "Name of our Express App - Development",
    "mail": {
      "host": "dev-mail-server",
      "port": 1234
    }
  }
  ```

- create a `development.json` file to store all configurations specific to development enviroment.

  ```json
  {
    "name": "Name of our Express App - Production",
    "mail": {
      "host": "prod-mail-server",
      "port": 4321
    }
  }
  ```

#### Storing configuration settings

- use `config` package to store configuration setting for your node enviroment

  ```js
  import config from "config";

  // Configuration
  console.log(`App Name: ${config.get("name")}`);
  console.log(`Mail Server: ${config.get("mail.host")}`);
  console.log(`Port: ${config.get("mail.port")}`);
  ```

- If we change the node enviroment, we will see different values

`NOTE`: as a best pratice, do not store credential such as password to these configuration settings

### Storing Credentials

All the credentials must be stored on enviroment variables

#### Setting enviroment variable

- We will manually set this enviroment variable in development enviroment.

  ```zsh
  $ export app_password=1234
  ```

- However, in production enviroment we will use a configuration panel to store them.

<!--    TODO: add image of configuration panel-->

![Configuration panel]()

#### Reading credentials

Use config module to read enviroment variables

- create a "custom-enviroment-variables.json` in a config folder to store credentials

  ```json
  // custom-enviroment-variables.json
  {
    "mail": {
      "password": "app_password"
    }
  }
  ```

- use `config` package to store configuration setting for the enviroment variable

  ```js
  import config from "config";

  // Configuration
  console.log(`Mail Password: ${config.get("mail.password")}`);
  ```
