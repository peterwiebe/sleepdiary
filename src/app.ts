import {bootstrap} from 'angular2/platform/browser';
import {SleepdiaryApp} from './app/sleepdiary';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(SleepdiaryApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
