import { Injectable } from '@angular/core';

import { Item } from '../../models/Item';

import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class ItemProvider {

  items: Item[] = [];

  constructor(
    public afDatabase: AngularFireDatabase,
    private auth: AuthProvider
  ) { }

  getItems() {
    if (!this.auth.isAuthenticated())
      return;
    try {
      return this.afDatabase.list('items').snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    } catch (err) {
      throw err;
    }
  }

  addItem(item) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      item.uid = this.auth.getUser().uid;
      item.created_at = moment().format();
      const obj = this.afDatabase.list('items');
      return obj.push(item);
    } catch (err) {
      throw err;
    }
  }

  updateItem(item) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const obj = this.afDatabase.list('items');
      return obj.update(item.key, item);
    } catch (err) {
      throw err;
    }
  }

  removeItem(item) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const obj = this.afDatabase.list('items');
      return obj.remove(item.key);
    } catch (err) {
      throw err;
    }
  }

  deleteEverything() {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const obj = this.afDatabase.list('items');
      return obj.remove();
    } catch (err) {
      throw err;
    }
  }

}
