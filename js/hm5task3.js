class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
    return this.items;
  }

  removeItem(item) {
    if (this.items.includes(item)) {
      this.items.splice(this.items.includes(item), 1);
    }

    return this.items;
  }
}

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());

storage.addItem('Дроид');

console.log(storage.getItems());

storage.removeItem('Пролонгер');

console.log(storage.getItems());
