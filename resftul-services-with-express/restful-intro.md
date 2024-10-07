# Express.js Made Easy

This is a comprehensive and up-to-date Express.js tutorial documentation for JavaScript back-end developers

## RESTful Services with Express

Express is a fast and lightweight framework for building web applications

[Home](../README.md) / [Getting Started](./getting-started.md) / RESTful Services / [Introducing Express](./express-intro.md) / [Basic routing](./basic-routing.md) / [Serving static files](./serving-static-files.md)

### Introducing RESTful Services

> > **REST**

REST stands for Representational State Transfer.

- It's basically a conventional for building HTTP services throught which we expose resources such as customers using a simple meaningful address and support various operation around them.

- This means, we use simple HTTP protocol principles to provide support to `Create`, `Read`, `Update` and `Delete` data. We refer to those operations as CRUD operations

> > **HTTP Request Methods**

Every HTTP request has a method that determine its type or intention. Such HTTP methods are as follows...

**`GET`: for getting data**

- To get a list of customers for example, we should sent HTTP GET request to a given address or endpoint `GET /api/customers`. The server should return an array of customer objects.

  ```json
  [
    { "id": 1, "name": "" },
    { "id": 2, "name": "" },
    { "id": 3, "name": "" }
  ]
  ```

- To get a specific or single customer, we should include the id of that customer in the address `GET /api/customers/1`. Then the server will respond with the single customer object.

  ```json
  { "id": 1, "name": "" }
  ```

**`POST`: for creating data**

- To create a new customer , we should send an HTTP POST request to the endpont `POST /api/customers`. Also we should include customer object `{"name": ""}` in the body of the request. When server get this request will create a customer for us

  ```json
  { "id": 1, "name": "" }
  ```

**`PUT`: for updating data**

- To update a customer, we should send an HTTP PUT request to the endpont `PUT /api/customers/1`. Make sure to supply the id of the customer to be updated. But also we should include the customer object `{id: 1, "name": ""}` with updated properties in the body of our request

- When we send that data to a server, a server will update the customer with a given id according to updated values

  ```json
  { "id": 1, "name": "" }
  ```

**`DELETE`: for deleting data**

- To delete a single customer, we should send an HTTP DELETE request to the endpont `DELETE /api/customers/1`. The sever will respond by removing that customer from a array of customer objects

  ```json
  [
    { "id": 2, "name": "" },
    { "id": 3, "name": "" }
  ]
  ```

- We may optioanly omit a customer id to delete all the customers `DELETE /api/customers`.
