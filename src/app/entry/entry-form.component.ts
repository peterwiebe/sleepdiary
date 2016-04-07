import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Entry, EntryService} from './entry.service';

@Component({
  templateUrl: 'app/entry/entry-form.component.html',
  directives: [FORM_DIRECTIVES]
})
export class EntryFormComponent {
  newEntry: Entry;
  sleepability: string;
  wakeability: string;

  onSubmit(form: any) {
    console.log('you submitted value: ', form);
    form.sleepability = this.sleepability;
    form.wakeability = this.wakeability;
    this.newEntry = new Entry(form);
    console.log("form", form);
    console.log(this.newEntry);
  }

  fallAsleep(data: any) {
    console.log("data", data);
    this.sleepability = data;
  }

  wokeUp(data: any) {
    this.wakeability = data;
  }

}
