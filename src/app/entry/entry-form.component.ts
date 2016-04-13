import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Entry, EntryService} from './entry.service';
import {DataService} from "../shared/data.service";

@Component({
  templateUrl: 'app/entry/entry-form.component.html',
  directives: [FORM_DIRECTIVES],
  viewProviders: [DataService]
})
export class EntryFormComponent {
  newEntry: Entry;
  sleepability: string;
  wakeability: string;

  constructor(private _dataService: DataService) {}

  onSubmit(form: any) {
    console.log('***************')
    console.log(form)
    // console.log('you submitted value: ', form);
    form.sleepability = this.sleepability;
    form.wakeability = this.wakeability;
    this.newEntry = new Entry(form);
    // console.log("form", form);
    // console.log(this.newEntry);

    this._dataService.addData(this.newEntry)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      )

  }

  fallAsleep(data: any) {
    console.log("fallAsleep triggered")
    console.log("data", data);
    this.sleepability = data;
  }

  wokeUp(data: any) {
    console.log("wokeUp Triggered")
    this.wakeability = data;
  }

}
