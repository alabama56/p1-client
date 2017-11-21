import { Component, OnInit } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { UsersService, IUser } from '../users.service';
import { FollowersService, IFollow} from '../followers.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs/Rx';

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
    private location: Location
  ) { }
  

  ngOnInit() {
    const test = this.followSvc.getFollowers(91);
    
    
    console.log(test);
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
      console.log(params)
      this.followSvc.getFollowers(+params.get('id')).subscribe(res => this.followers = res);
    })
  }
}


// this.isbnsource.getBooks(this.isbn).subscribe(
//   data => { this.foundBooks = data.json();
// this.foundBooks = Array.of(this.foundBooks);