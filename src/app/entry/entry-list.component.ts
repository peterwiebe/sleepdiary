import {Component, OnInit} from 'angular2/core';
import {Entry, EntryService} from './entry.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/entry/entry-list.component.html',
  styleUrls: ['app/entry/entry-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class EntryListComponent implements OnInit {
  entrys: Entry[];
  constructor(
    private _service: EntryService) {}
  ngOnInit() {
    this._service.getAll().then(entrys => this.entrys = entrys);
  }
}
