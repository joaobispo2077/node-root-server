import http from 'node:http';

const PORT = 3333;

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {
    response.setHeader('Content-type', 'application/json');
    return response.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@xample.com'
    });

    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

server.listen(PORT);