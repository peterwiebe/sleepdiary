import {Injectable} from 'angular2/core';

export class Entry {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class EntryService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Entry(1, 'one'),
  new Entry(2, 'two'),
  new Entry(3, 'three')
];

let promise = Promise.resolve(mock);
