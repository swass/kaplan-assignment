import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input() bookData:any;
  title:String;
  author:String;
  publisher: string;
  publishedDate:String;
  cardOpen:Boolean=false;

  ngOnInit(): void {
    if(this.bookData){
      this.title = this.bookData.volumeInfo.title;
      this.author = this.bookData.volumeInfo.authors[0];
      this.publisher = this.bookData.volumeInfo.publisher;
      this.publishedDate = this.bookData.volumeInfo.publishedDate;
    }
  }

  toggleCard(){
      this.cardOpen = !this.cardOpen;
  }

}
