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

const server = http.createServer((request, response) => {
  return request
    .pipe(new ConvertToNegative())
    .pipe(response);
});

server.listen(3334);