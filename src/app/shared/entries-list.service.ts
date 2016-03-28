import {Injectable} from 'angular2/core';
import {Entry} from './entry.model';
import {ENTRIES} from '../mock/entries';

@Injectable()
export class EntryService{
  getAllEntries(){
    return ENTRIES;
  }
  getRecipe(index: number) {
    return ENTRIES[index];
  }

  getRecipeIndex(item: Entry) {
    return ENTRIES.indexOf(item);
  }

  insertRecipe(item: Entry) {
    ENTRIES.push(item);
  }

  deleteRecipe(index: number) {
    ENTRIES.splice(index, 1);
  }

  updateRecipe(index: number, item: Entry) {
    ENTRIES[index] = item;
  }
}
