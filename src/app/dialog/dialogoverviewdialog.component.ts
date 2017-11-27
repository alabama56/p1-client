import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService, IChirp } from '../data.service';
import { UsersService } from "../users.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialogoverviewdialog',
  templateUrl: './dialogoverviewdialog.component.html',
  styleUrls: ['./dialogoverviewdialog.component.scss']
})
export class DialogOverviewDialog {
  @Input()
  chirp: any;
  
 

  constructor(public dialogRef: MatDialogRef<DialogOverviewDialog>,
    private svc: DataService,
    private userSvc: UsersService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   
    
  onNoClick(): void {
    this.dialogRef.close();
  }
  

  // updateChirp(chirp) {
  //   this.userSvc.me()
  //   .subscribe((me) => {
  //     if(me.id != this.data.chirp.user_id){
  //       alert('You are not authorized to delete this chirp')
  //     }else {
  //       let id = this.data.chirp.id;
  //       let user_id = me.id;
  //       this.svc.updateChirp(id, user_id, )
  //     }
  //   })
  // }

  deleteChirp(chirp) {
    this.userSvc.me()
    .subscribe((me) => {
      if(me.id != this.data.chirp.user_id){
        alert('You are not authorized to delete this chirp')
      }else{
        this.svc.deleteChirp(this.data.chirp.id)
        .subscribe(() => {
          this.refresh();
        })
      }
    })
  }

  refresh(){
    this.router.navigate(["/list"])
  }
}
