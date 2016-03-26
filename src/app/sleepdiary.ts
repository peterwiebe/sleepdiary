import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {EntryListComponent} from './entry/entry-list.component';


@Component({
  selector: 'sleepdiary-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/sleepdiary.html',
  styleUrls: ['app/sd-main.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
 { path: '/', name: 'Entries', component: EntryListComponent, useAsDefault: true }
])
export class SleepdiaryApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
