import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavComponent } from './left-nav.component';
import { AppComponent } from '../app.component';

describe('LeftNavComponent', () => {
  let component: LeftNavComponent;
  let fixture: ComponentFixture<LeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case for toggleLeftNav
  describe('toggleLeftNav', ()=>{

    beforeEach(() => {
      const fixture = TestBed.createComponent(LeftNavComponent);
    });
    it('should change leftNavState to true if false',()=>{
      //arrange
      component.leftNavState = false;
      component.subMenuExpanded = false;
      //act
      component.toggleLeftNav();
      //assert
      expect(component.leftNavState).toBe(true);
      expect(component.subMenuExpanded).toBe(false);
    });
    it('should change leftNavState to false if true', ()=>{
      //arrange
      component.leftNavState= true;
      //act
      component.toggleLeftNav();
      //assert
      expect(component.leftNavState).toBe(false);
    });

  });
});
