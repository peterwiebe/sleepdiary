import {Component, OnInit} from 'angular2/core';
import {Entry, EntryService} from './entry.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/entry/entry-detail.component.html',
  styleUrls: ['app/entry/entry-detail.component.css']
})
// export class EntryDetailComponent implements OnInit, CanDeactivate {
export class EntryDetailComponent {

  entry: Entry;
  editName: string;

  constructor(
    private _service: EntryService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    // let id = +this._routeParams.get('id');
    // this._service.get(id).then(entry => {
    //   if (entry) {
    //     this.editName = entry.name;
    //     this.entry = entry;
    //   } else {
    //     this.gotoList();
    //   }
    // });
  }

  // routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
  //   if (!this.entry || this.entry.name === this.editName) {
  //     return true;
  //   }
  //
  //   return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  // }
  //
  // cancel() {
  //   this.editName = this.entry.name;
  //   this.gotoList();
  // }
  //
  // save() {
  //   this.entry.name = this.editName;
  //   this.gotoList();
  // }
  //
  // gotoList() {
  //   this._router.navigate(['EntryList']);
  // }
}
