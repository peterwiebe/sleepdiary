import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {EntryListComponent} from './entry-list.component';
import {EntryDetailComponent} from './entry-detail.component';
import {EntryFormComponent} from './entry-form.component';
import {EntryService} from './entry.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [EntryService],
  directives: [RouterOutlet]
})
// @RouteConfig([
//   { path:'/', name: 'EntryList', component: EntryListComponent }
//   // {path:'/:id', name: 'EntryDetail', component: EntryDetailComponent}
// ])
@RouteConfig([])
export class EntryRoot { }
