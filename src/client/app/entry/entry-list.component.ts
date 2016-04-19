import {Component, OnInit} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {Entry, EntryService} from './entry.service';
import {EntryDetailComponent} from './entry-detail.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/entry/entry-list.component.html',
  styleUrls: ['app/entry/entry-list.component.css'],
  providers: [EntryService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/:id', name: 'EntryDetail', component: EntryDetailComponent }
])
export class EntryListComponent implements OnInit {
  entries: Entry[];
  constructor(
    private _service: EntryService) {}
  ngOnInit() {
    this._service.getAll().then(entries => this.entries = entries);
  }
}
