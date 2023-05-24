import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewBookDialogComponent } from './create-new-book-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaplan-assignment';
  leftMenuState:Boolean = true;
  constructor(public dialog: MatDialog){

  }

  onLeftNavStateChange(data: Boolean){
    this.leftMenuState = data;
  }
  openDialog(){
    this.dialog.open(CreateNewBookDialogComponent);
  }
}





