// Streaming => Netflix, Spotfy

// Use case real world: Import customer data from CSV file
// size: 1gb - 1.000.000 lines
// endpoint: POST /upload import.csv
// speed: 10mb/s - 100s to upload (1min and 40 seconds)
// without streams: wait for upload and after upload starts inserting data into database
// with streams: while upload starts inserting data into database, so for each second is uploaded 10.000 lines, then for each second is inserted into database 10.000 lines

// Readable Streams -> reading parts of data
// Writeable Streams -> sending parts of data 

// process.stdin
//   .pipe(process.stdout);

import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const index = this.index++;

    setTimeout(() => {
      if (index > 100) {
        this.push(null);
      } else {
        const buffer = Buffer.from(String(index));
        this.push(buffer);
      }
    }, 1000);
  }
}

// new OneToHundredStream().pipe(process.stdout);

class ConvertToNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const data = Number(chunk.toString());

    if (Number.isNaN(data)) {
      callback(new Error("Invalid number"));
    }

    const transformed = data * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new ConvertToNegative())
  .pipe(new MultiplyByTenStream());