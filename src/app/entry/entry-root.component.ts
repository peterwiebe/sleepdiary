import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {EntryListComponent} from './entry-list.component';
import {EntryDetailComponent} from './entry-detail.component';
import {EntryService} from './entry.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [EntryService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'EntryList', component: EntryListComponent, useAsDefault: true},
  {path:'/:id', name: 'EntryDetail', component: EntryDetailComponent}
])
export class EntryRoot {
  constructor() {}
}
