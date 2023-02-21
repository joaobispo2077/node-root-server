import { Readable } from "node:stream";

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

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half' // adicione essa linha
})