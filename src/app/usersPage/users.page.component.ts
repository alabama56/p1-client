import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { UsersService, IUser} from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-users.page',
  templateUrl: './users.page.component.html',
  styleUrls: ['./users.page.component.scss']
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
