import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {EntryService} from './entry.service';

describe('EntryService', () => {

  beforeEachProviders(() => [EntryService]);

  it('should get all entrys', inject([EntryService], (entryService:EntryService) => {
    entryService.getAll().then(entrys => expect(entrys.length).toBe(3));
  }));

  it('should get one entry', inject([EntryService], (entryService:EntryService) => {
    entryService.get(1).then(entry => expect(entry.id).toBe(1));
  }));

});
