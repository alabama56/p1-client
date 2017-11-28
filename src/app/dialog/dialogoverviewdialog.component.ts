import { Component, OnInit, Output, EventEmitter, Inject, Input, ViewChild } from '@angular/core';
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
  @ViewChild('message') messageInput: any;
  isEditing: boolean = false;
  onEdit = new EventEmitter();
  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    private svc: DataService,
    private userSvc: UsersService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
  

  updateChirp(chirp) {
    if (!this.isEditing) {
      this.isEditing = true;
      return;
    }

    this.userSvc.me()
    .then((me: any) => {
      if(me.id != this.data.chirp.user_id){
        alert('You are not authorized to update this chirp')
      } else {
        let id = this.data.chirp.id;
        let user_id = me.id;
        this.data.chirp.message = this.messageInput.nativeElement.innerText;
      
        this.svc.updateChirp(id, user_id, this.data.chirp.message)
          .subscribe(() => {
            this.onEdit.emit(this.data.chirp);
            this.dialogRef.close();
          }, (err) => {
            console.log(err);
          });
      }
    })
  }


  deleteChirp(chirp) {
    this.userSvc.me()
    .then((me: any) => {
      if(me.id != this.data.chirp.user_id){
        alert('You are not authorized to delete this chirp')
      }else{
        this.svc.deleteChirp(this.data.chirp.id)
        .subscribe(() => {
          this.refresh();
        })
      }
    },() => {
      alert('You are not authorized to delete this chirp')      
    })
  }

  refresh(){
    this.router.navigate(["/list"]);
  }
}
