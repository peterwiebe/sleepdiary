import {Injectable} from 'angular2/core';
import {Entry} from './entry.model';
import {ENTRIES} from '../mock/entries'; // pull data in from mock

@Injectable()
export class HistoryListService{
  getEntriesByWeek(){
    // return ENTRIES
  }
}
