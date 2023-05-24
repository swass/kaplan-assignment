import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SearchBookService } from '../search-book.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchFormControl = new FormControl('', []);
  searchTxt:String;
  constructor(private searchService: SearchBookService){}

  searchText(){
    if(this.searchFormControl.value){
      this.searchTxt = this.searchFormControl.value
    } else{
      this.searchTxt = '';
    }
    this.searchService.emitSearchEvent(this.searchTxt);
  }


}


