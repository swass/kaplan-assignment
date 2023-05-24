import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SearchComponent } from './search/search.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookItemComponent } from './book-item/book-item.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateNewBookDialogComponent } from './create-new-book-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      imports: [MatDialogModule,
            HttpClientTestingModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatInputModule,
            BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        LeftNavComponent,
        TopNavComponent,
        SearchComponent,
        BooksContainerComponent,
        BookItemComponent,
        CreateNewBookDialogComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
