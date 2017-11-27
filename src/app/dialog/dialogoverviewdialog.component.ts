import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService, IChirp } from '../data.service';

@Component({
  selector: 'app-dialogoverviewdialog',
  templateUrl: './dialogoverviewdialog.component.html',
  styleUrls: ['./dialogoverviewdialog.component.scss']
})
export class DialogOverviewDialog {
  @Input()
  chirp: any;
  
 

  constructor(public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
