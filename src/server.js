import http from 'node:http';

const PORT = 3333;

const users = [];

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (err) {
    request.body = null;
  }

  if (method === 'GET' && url === '/users') {
    response.setHeader('Content-type', 'application/json');
    return response.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body;

    users.push({
      id: users.length + 1,
      name,
      email
    });

    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

server.listen(PORT);