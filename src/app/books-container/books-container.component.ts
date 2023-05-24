import { Component, OnDestroy, OnInit } from '@angular/core';
import {BooksContentService } from '../books-content.service';
import { Subscription } from 'rxjs';
import { SearchBookService } from '../search-book.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent implements OnInit, OnDestroy{
  booksContent:Subscription;
  items:any[];
  displayItems:any[];
  filteredItems:any[]=[];
  contentLoaded:Boolean= false;
  private searchSubscription: Subscription;


  constructor(private books:BooksContentService, private searchService:SearchBookService){}

  ngOnInit(){
    this.booksContent = this.books.getAPIData().subscribe(
      (data)=>{
        this.items = data.items;
        this.displayItems = this.items;
        this.contentLoaded = true;
      }
    );

    this.searchSubscription = this.searchService.searchEvent.subscribe((data1)=>{
      //get the filtered items based on the text searched/typed
      this.filteredItems = this.items.filter((item) => {
        //checking for null value because API returned 9th item does not have publisher
        //which is causing error while using  toLowerCase function
        let title= item.volumeInfo.title || '';
        let author = item.volumeInfo.authors[0] || '';
        let publisher = item.volumeInfo.publisher || '';
        let publishedDate = item.volumeInfo.publishedDate || '';

        return (title.toLowerCase().includes(data1.toLowerCase()))||
        (author.toLowerCase().includes(data1.toLowerCase()))||
        (publisher.toLowerCase().includes(data1.toLowerCase()))||
        (publishedDate.toLowerCase().includes(data1.toLowerCase()));

      });
      //if search box has text, show filtered items
      //if search box is empty, show all items
      if(data1){
        this.displayItems = this.filteredItems
      } else{
        this.displayItems = this.items;
      }

    });

  }
  ngOnDestroy(): void {
    this.booksContent.unsubscribe();
    this.contentLoaded = false;
    this.searchSubscription.unsubscribe();
  }

}
