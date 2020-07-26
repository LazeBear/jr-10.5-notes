const express = require('express');
const app = express();

// localhost:3000/greeting/mason?title=mr
// timeMiddleware -> middleware -> route handler

// https://   www.example.com   /v1/books/    id1         ?name=computer
// protocol   domain            path      route params    query params

// app.use -> all methods
// global middleware function, affect all incoming request

function timeMiddleware(req, res, next) {
  console.log(1);
  req.time = new Date();
  next();
}
function timeMiddleware2(req, res, next) {
  console.log(2);
  req.time = new Date();
  next();
}
app.use(timeMiddleware);
app.use(timeMiddleware2);

function middleware(req, res, next) {
  console.log('3');
  req.time = new Date();

  // 检测authorization header是否存在
  // 如果不存在，直接res.status(401).send()
  // 如果存在，req.user = userId

  // res.status(401).send('stop here');
  next();
}

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).json({ error: 'server cannot handler this request' });
  // next();
}

// app.use(middleware);
app.get('/greeting', middleware);
// method -- path -- route handler
app.get('/greeting/:name', (req, res, next) => {
  console.log(req.params);
  const { name } = req.params;
  const { title } = req.query;
  next('error');
  // res.send(`hello ${title}. ${name}`);
});

app.get('/', (req, res) => {
  res.send(req.time);
});

app.post('/hello', (req, res) => {
  res.send('hello from post');
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

// npm init -y
// npm i xxxxx
// npm i -D xxxx
// npm run xxx
// express

// const a = function(){}
// a.x = 1;

// a();
// a.x -> 1
