import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {EntryDetailComponent} from './entry-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Entry, EntryService} from './entry.service';

class MockEntryService {
  get() { return Promise.resolve(new Entry(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('EntryDetailComponent', () => {

  beforeEachProviders(() => [
    provide(EntryService, {useClass: MockEntryService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(EntryDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
