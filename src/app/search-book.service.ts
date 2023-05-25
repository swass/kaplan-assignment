import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {
  searchEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  emitSearchEvent(text:String){
    this.searchEvent.emit(text);
  }

}
