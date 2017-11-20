import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewDialog } from "../dialog/dialogoverviewdialog.component"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: Array<IChirp>;
  chirp: IChirp;

  todayDate = new Date();

  constructor(private dataService: DataService, 
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getChirps()
    .subscribe((response) => this.chirps = response);
  }

  openDialog(chirp): void {
    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '35em',
      data: { chirp }
     
    });
  }
}




