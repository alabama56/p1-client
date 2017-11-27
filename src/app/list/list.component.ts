import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewDialog } from "../dialog/dialogoverviewdialog.component";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: Array<IChirp>;
  chirp: IChirp;
  form: FormGroup;

  todayDate = new Date();

  constructor(private dataService: DataService,
              private fb: FormBuilder, 
              private userSvc: UsersService,
              private dialog: MatDialog) 
              {this.form = this.fb.group({
                message: ['', Validators.required]
              }) 
            }

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

  subbmitChirp() {
    this.userSvc.me()
    .subscribe((me) => {
      let user_id = me.id;
      console.log(this.form.value)
      this.dataService.createChirp(user_id, this.form.value.message)
      .subscribe()
    })
 
  }
}




