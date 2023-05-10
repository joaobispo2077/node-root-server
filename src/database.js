import fs from 'node:fs/promises';
import path from 'node:path';

export class Database {
  #databasePath = new URL('../database.json', import.meta.url);
  #data = {};

  constructor() {
    this.#load();
  }

  #load() {
    fs.readFile(this.#databasePath, 'utf-8')
      .then(data => {
        this.#data = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(this.#databasePath, JSON.stringify(this.#data, null, 2));
  }

  select(table) {
    const data = this.#data[table] ?? [];
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#data[table])) {
      this.#data[table].push(data);
    } else {
      this.#data[table] = [data];

    }

    this.#persist();

    return data;
  }

  delete(table, id) {
    const rowIndex = this.#data[table].findIndex(row => row.id === id);

    if (rowIndex > -1) {
      this.#data[table].splice(rowIndex, 1);

      this.#persist();
    }
  }

  update(table, id, data) {
    const rowIndex = this.#data[table].findIndex(row => row.id === id);

    if (rowIndex > -1) {
      this.#data[table][rowIndex] = {
        ...this.#data[table][rowIndex],
        ...data
      };

      this.#persist();
    }
  }
}