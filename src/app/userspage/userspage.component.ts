import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { UsersService, IUser} from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-users-page',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UsersPageComponent implements OnInit {
  users:Array <IUser>;
  user: IUser;


  
  constructor(private usersService: UsersService)
     { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe((response) => this.users = response);
  }
}
