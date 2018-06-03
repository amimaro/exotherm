import { Injectable } from '@angular/core';

import { Item } from '../../models/Item';

@Injectable()
export class ItemProvider {

  items: Item[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(data) {
    this.items.push(data);
  }

  updateItem(data) {
    this.items.push(data);
  }

  removeItem(data) {
    this.items.push(data);
  }

}
