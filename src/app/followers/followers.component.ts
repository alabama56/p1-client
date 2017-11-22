import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewDialog } from "../dialog/dialogoverviewdialog.component";
import { UsersService } from "../users.service";
import { FollowersService } from "../followers.service"



@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: Array<any>;
  chirp: any;
  id: number;
  user$: any;
 

  constructor(private svc: DataService,
    private userSvc:  UsersService,
    private followerSvc: FollowersService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit() {
   
    this.route.paramMap
    .switchMap((params: ParamMap ) => {
     return this.svc.getChirpsByFollowing(+params.get('id'))
    })
    .subscribe((response) => this.followers = response);

    this.route.paramMap
    .map((params: ParamMap): any => {
      this.user$ = this.userSvc.getUser(+params.get('id'))
    }).subscribe();
  }

  openDialog(chirp): void {
    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '35em',
      data: { chirp }
     
    });
  }
}

