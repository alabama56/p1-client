import { Component, OnInit } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { UsersService, IUser } from '../users.service';

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
 

  constructor(
    private svc: DataService,
    private userSvc: UsersService,
    private route: ActivatedRoute,
    private location: Location
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
  }

}
