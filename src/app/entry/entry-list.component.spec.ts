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
import {EntryListComponent} from './entry-list.component';
import {Entry, EntryService} from './entry.service';

class MockEntryService {
  getAll() { return Promise.resolve([new Entry(1, 'one')]); }
}

describe('EntryListComponent', () => {

  beforeEachProviders(() => [
    provide(EntryService, {useClass: MockEntryService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(EntryListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
