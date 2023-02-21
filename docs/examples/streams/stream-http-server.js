import http from 'node:http';
import { Transform } from "node:stream";

class ConvertToNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(chunk.toString());

    if (Number.isNaN(data)) {
      callback(new Error("Invalid number"));
    }

    const transformed = data * -1;
    console.log(transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer(async (request, response) => {
  // return request
  //   .pipe(new ConvertToNegative())
  //   .pipe(response);

  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();
  console.log(fullStreamContent);


  return response.end(fullStreamContent)
});

server.listen(3334);