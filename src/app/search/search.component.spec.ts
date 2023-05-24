import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render mat-form-field with valid form field control', () => {
    // Arrange
    const inputElement = fixture.nativeElement.querySelector('input'); // Get the input element

    // Assert
    expect(inputElement).toBeTruthy(); // Check if the input element exists
  });

  // it('should create a form control', () => {
  //   // Arrange
  //   const formControl = component.searchFormControl.get('exampleControl');

  //   // Assert
  //   expect(formControl).toBeTruthy();
  // });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  

});


