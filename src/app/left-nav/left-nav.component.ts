import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  leftNavState:Boolean = true;
  subMenuExpanded:Boolean = false
  @Output() leftNavStateChange:EventEmitter<Boolean>= new EventEmitter;

  toggleLeftNav(){
    this.leftNavState = !this.leftNavState;
    // if submenu is expanded and left menu collapsed 
    // then collapse submenu to avoid blank space in left menu
    if(!this.leftNavState){
      this.subMenuExpanded = false;
    }
    // pass the menu toggle event to app component
    this.leftNavStateChange.emit(this.leftNavState)
  }
  expandSubMenu(){
    if(!this.leftNavState){
      this.toggleLeftNav();
    }
    this.subMenuExpanded = !this.subMenuExpanded;
  }
}
