export class Database {
  #data = {};

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

    return data;
  }
}