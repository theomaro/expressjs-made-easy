const express = require("express");
const Joi = require("joi");

const PORT = process.env.PORT || 3000;

let courses = require('./db.json');

const app = express();
app.use(express.json()); // adding middlewere

// responding to HTTP GET request
app.get("/api/courses", (req, res) => res.send(courses));

app.get("/api/courses/:id", (req, res) => {
  // look up the course with given id, if not exist return 404
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) return res.status(404).send("Course was not found");

  // return the course
  res.send(course);
});

// responding to a HTTP POST request
app.post("/api/courses", (req, res) => {
  // validate a course, if invalid return 400
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // read the course object inside a body of request
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    code: req.body.code,
    price: req.body.price,
    duration: req.body.duration,
  };

  // create new course
  courses.push(course);

  // return created course
  res.send(course);
});

// responding to a HTTP PUT request
app.put("/api/courses/:id", (req, res) => {
  // look up the course with given id, if not exist return 404
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) return res.status(404).send("Course was not found");

  // validate the course, if invalid return 400
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // update the course
  course.name = req.body.name;
  course.code = req.body.code;
  course.price = req.body.price;
  course.duration = req.body.duration;

  // return updated course
  res.send(course);
});

// responding to a HTTP DELETE request
app.delete("/api/courses", (req, res) => {
  if (!courses) res.status(400).send("No courses");
  courses.splice(0, courses.length);
  res.send(courses);
});

app.delete("/api/courses/:id", (req, res) => {
  // look up the course with given id, if not exist return 404
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) return res.status(404).send("Course was not found");

  // delete the course
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // return deleted course
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(250).required(),
    code: Joi.string(),
    price: Joi.number().integer().min(100).max(500),
    duration: Joi.string(),
  });
  return schema.validate(course);
}

// listen to incoming connection at given port
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
