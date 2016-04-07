import {Injectable} from 'angular2/core';

export class Entry {
  // constructor(public id: number, public name: string) { }
  id: number;
  dateToBed: string;
  timeToBed: string;
  timeAwake: string;
  sleepability: string;
  noiseDisturbance: boolean;
  lightDisturbance: boolean;
  allergyDisturbance: boolean;
  stressDisturbance: boolean;
  discomfortDisturbance: boolean;
  wakeability: string;
  notes: string;


  constructor(parameters: any) {
    this.id = parameters.id || 1;
    this.dateToBed = parameters.dateToBed || "";
    this.timeToBed = parameters.bedtime || "";
    this.timeAwake = parameters.awaketime || "";
    this.sleepability = parameters.sleepability || "";
    this.noiseDisturbance = parameters.noise || false;
    this.lightDisturbance = parameters.light || false;
    this.allergyDisturbance = parameters.allergies || false;
    this.stressDisturbance = parameters.stress || false;
    this.discomfortDisturbance = parameters.discomfort || false;
    this.wakeability = parameters.wakeability || "";
    this.notes = parameters.notes || "";
  }
}

@Injectable()
export class EntryService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Entry({id: 10, dateToBed: "Jan 10", timeToBed: '1:30 pm'}),
  new Entry({id: 11, dateToBed: "Jan 11", timeToBed: '10:30 pm'}),
  new Entry({id: 12, dateToBed: "Jan 12", timeToBed: '9:30 pm'})
];

let promise = Promise.resolve(mock);
