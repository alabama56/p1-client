import { Component, OnInit } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { UsersService, IUser } from '../users.service';
import { FollowersService, IFollow} from '../followers.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewDialog } from "../dialog/dialogoverviewdialog.component";
import { UpdateComponent } from "../update/update.component"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  chirps: Array<IChirp> = [];
  user$: any;
  followers: Array<any>;
 

  constructor(
    private svc: DataService,
    private userSvc: UsersService,
    private followSvc: FollowersService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) { }
  

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.svc.getChirpsByUser(params.get('id'))
      })
      .subscribe((response) => {
        this.chirps = response.body;
      });

    this.route.paramMap
      .map((params: ParamMap): any => {
        this.user$ = this.userSvc.getUser(+params.get('id'))
      }).subscribe();


    this.route.paramMap
    .subscribe((params: ParamMap): any => {
      this.followSvc.getFollowers(+params.get('id')).subscribe(res => this.followers = res);
    })
  }

  openDialog(chirp): void {
    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '35em',
      data: { chirp }
     
    });
  }

  openUpdate(user): void {
    this.userSvc.me()
    .then((me: any) => {
      if(me.id != user.id){
        alert(`You are not authorized to edit this profile`)
      }else {
        let dialogRef = this.dialog.open(UpdateComponent, {
          width: '35em',
          data: { user }
        });
      }
    },() => {
      alert(`You are not authorized to edit this profile`)
    })
 
  }
}
