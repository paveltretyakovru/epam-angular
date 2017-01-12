const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  switch(req.url) {
    case '/':
      return res.end('Hello Nodejs server!');

    case '/login':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.write(JSON.stringify({test: 123, google: '.com'}));

    default:
      return res.end('Hello Nodejs server!');
  }
}

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if(err) {
    return console.log('Something wrong', err);
  }

  console.log(`Server on port ${port}`);
});
