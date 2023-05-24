import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksContentService {
  apiUrl:string = "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep";
  constructor(private http: HttpClient) { }

  getAPIData(): Observable<any>{
    let bookContents = this.http.get(this.apiUrl);
    return bookContents;
  }
}

