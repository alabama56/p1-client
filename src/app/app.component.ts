import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginformComponent } from "./loginform/loginform.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginformComponent, {
      width: '400px',
      data: { }
     
    });
  }
}
