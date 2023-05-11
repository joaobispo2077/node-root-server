import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js';

const PORT = 3333;

const checkRoute = (method, path, route) => route.method === method && route.path.test(path);

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  const foundRoute = routes.find(route => checkRoute(method, url, route));

  if (foundRoute) {

    const { handler, path } = foundRoute;
    const routeParams = request.url.match(path);

    const { query, ...params } = routeParams.groups;

    request.params = { ...params };
    request.query = query ? extractQueryParams(query) : {};
    return handler(request, response);
  }

  return response.writeHead(404).end();
});

server.listen(PORT);