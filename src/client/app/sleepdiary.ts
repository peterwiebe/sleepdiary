import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {EntryRoot} from './entry/entry-root.component';
import {EntryListComponent} from './entry/entry-list.component';
import {EntryFormComponent} from './entry/entry-form.component';
import {DataService} from './shared/data.service';
import {SignupComponent} from "./shared/signup.component";
import {SigninComponent} from "./shared/signin.component";
import {HeaderComponent} from './shared/header.component';
import {AuthService} from './shared/auth.service';
import {StoredDataComponent} from './entry/stored-data.component';
import {AuthRouterOutlet} from './shared/auth-router-outlet.directive';

@Component({
  selector: 'sleepdiary-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/sleepdiary.html',
  styleUrls: ['app/sd-main.css'],
  directives: [HeaderComponent, AuthRouterOutlet]
})
@RouteConfig([
  { path: '/...', name: 'EntryList', component: EntryListComponent},
  { path: '/entry/new', name: 'EntryForm', component: EntryFormComponent },
  { path: '/signup', name: 'Signup', component: SignupComponent, useAsDefault: true },
  { path: '/signin', name: 'Signin', component: SigninComponent },
  { path: '/getdata', name: 'GetData', component: StoredDataComponent }
])
export class SleepdiaryApp implements OnInit {
  constructor(private _router:Router, private _authService: AuthService) {}

  ngOnInit(): any {
    this._authService.getLoggedOutEvent().subscribe(() => this._router.navigate(['Signin']));
  }
}
