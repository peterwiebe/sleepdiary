import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {EntryRoot} from './entry/entry-root.component';
import {EntryListComponent} from './entry/entry-list.component';
import {EntryFormComponent} from './entry/entry-form.component';
import {DataService} from './shared/data.service';
import {SignupComponent} from "./shared/signup.component";
import {SigninComponent} from "./shared/signin.component";

@Component({
  selector: 'sleepdiary-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/sleepdiary.html',
  styleUrls: ['app/sd-main.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
 { path: '/...', name: 'EntryList', component: EntryListComponent, useAsDefault: true },
 { path: '/entry/new', name: 'EntryForm', component: EntryFormComponent },
 { path: '/signup', name: 'Signup', component: SignupComponent },
 { path: '/signin', name: 'Signin', component: SigninComponent },

])
export class SleepdiaryApp { }
