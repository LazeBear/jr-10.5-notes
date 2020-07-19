const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.write(homePage);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Another page</h2>');
    res.end();
  }
});

server.listen(8080);
