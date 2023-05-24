import { TestBed } from '@angular/core/testing';
import { BooksContentService } from './books-content.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BooksContentService', () => {
  let http:HttpClient;
  let mockHttp:any;
  beforeEach(async () => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'patch']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[{ provide: HttpClient, useValue: mockHttp }]

    });
  });

  let service: BooksContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksContentService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get API Data', ()=>{
    it('should return book data', ()=>{
      //arrange
      const content = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';
      //act
      service.getAPIData();
      // assert
      expect(mockHttp.get).toHaveBeenCalledWith(content);
    });
  })
});
