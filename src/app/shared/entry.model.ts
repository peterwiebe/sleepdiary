export class Entry {
  day: string;
  bedtime: number;
  awake: number;
  notes: string;

  constructor(day: string, bedtime: number, awake: number, notes: string){
    this.day = day;
    this.bedtime = bedtime;
    this.awake = awake;
    this.notes = notes;
  }
}
