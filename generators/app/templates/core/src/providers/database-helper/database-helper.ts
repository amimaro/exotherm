import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { AuthProvider } from '../auth/auth';

@Injectable()
export class DatabaseHelperProvider {

  constructor(public afDatabase: AngularFireDatabase,
    private auth: AuthProvider) { }

  all(params) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      return this.afDatabase.list(params.collection).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            .filter(element => {
              if(element.hasOwnProperty('deleted_at'))
                return false;
              return true;
            })
        )
      );
    } catch (err) {
      throw err;
    }
  }

  add(params) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      params.data.uid = this.auth.getUser().uid;
      if (params.timestamps) {
        params.data.created_at = moment().format(params.format);
        params.data.updated_at = moment().format(params.format);
      }
      const obj = this.afDatabase.list(params.collection);
      return obj.push(params.data);
    } catch (err) {
      throw err;
    }
  }

  update(params) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const list = this.afDatabase.list(params.collection);
      if (params.data.hasOwnProperty('updated_at'))
        params.data['updated_at'] = moment().format(params.format);
      return list.update(params.data.key, params.data);
    } catch (err) {
      throw err;
    }
  }

  remove(params) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const list = this.afDatabase.list(params.collection);
      if (!params.softDelete)
        return list.remove(params.data.key);
      params.data['deleted_at'] = moment().format(params.format);
      return list.update(params.data.key, params.data);
    } catch (err) {
      throw err;
    }
  }

  drop(params) {
    if (!this.auth.isAuthenticated())
      return;
    try {
      const obj = this.afDatabase.list(params.collection);
      return obj.remove();
    } catch (err) {
      throw err;
    }
  }

}
