import { Component } from '@angular/core';
import { select, Store } from '@mst-ngrx';

import * as fromUsers from './store/handlers/users.handlers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewModel$ = this.store.state$.pipe(select(fromUsers.stateName));

  constructor(private store: Store) {}

  fetchUsers() {
    this.store.dispatch(fromUsers.fetchUsers());
  }

}
