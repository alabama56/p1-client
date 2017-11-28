import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { UsersService, IUser} from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginformComponent } from "../loginform/loginform.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-users-page',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UsersPageComponent implements OnInit {
  users:Array <IUser>;
  user: IUser;


  
  constructor(private usersService: UsersService,
    private dialog: MatDialog)
     { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe((response) => this.users = response);
  }

  openLogInDialog(): void {
    let dialogRef = this.dialog.open(LoginformComponent, {
      width: '30em',
      data: { }
     
    });
  }
}
