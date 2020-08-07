// model controller

const express = require('express');

const app = express();
// body-parser
app.use(express.json());

// function json() {
//   return (req, res, next) => { };
// }
// app.use(json());

const people = [];

app.use((req, res, next) => {
  res.setHeader('Allow-Access-From-Origin', '*');
  next();
});

// route handler
app.get('/people', (req, res) => {
  const { name } = req.query;
  if (name) {
    //
    const filtered = people.filter((i) => i.name.includes(name));
    return res.json(filtered);
  }
  return res.json(people);
});

app.post('/people', (req, res) => {
  const { name, age } = req.body;
  const person = { name, age };
  people.push(person);
  return res.status(201).json(person);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
