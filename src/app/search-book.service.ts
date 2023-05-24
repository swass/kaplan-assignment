import { EventEmitter, Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { BooksContainerComponent } from './books-container/books-container.component';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {
  textToSearch$:Observable<any>=of('');
  filterSearchItems: EventEmitter<String>;
  searchEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }


  filterBooks(searchText:Observable<String>){
    this.textToSearch$ = searchText;

  }

  emitSearchEvent(text:String){
    this.searchEvent.emit(text);
  }

}
