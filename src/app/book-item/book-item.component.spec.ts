import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input data in template/card', () => {
    // Arrange
    const title="Test Title";
    const author = 'Test author';
    const publisher = 'Test publisher';
    const publishedDate = new Date();

    // Act
    component.title = title;
    component.author = author;
    component.publisher = publisher;
    component.publishedDate = publishedDate;
    fixture.detectChanges();

    // Assert
    const element = fixture.nativeElement;
    expect(element.textContent).toContain(title);
    expect(element.textContent).toContain(author);
    expect(element.textContent).toContain(publisher);
    expect(element.textContent).toContain(publishedDate);
  });

  // test case for toggle card method
  describe('toggleCard', ()=>{
    it('should toggle cardOpen to false if it is true', ()=>{
      //arrange
      component.cardOpen = true;
      // act
      component.toggleCard();
      // assert
      expect(component.cardOpen).toBe(false);
    });
    it('should toggle cardOpen  to true if it is false', ()=>{
      //arrange
      component.cardOpen = false;
      // act
      component.toggleCard();
      // assert
      expect(component.cardOpen).toBe(true);
    })
  });
});

