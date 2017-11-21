import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Http } from '@angular/http';

//rxjs
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


export interface IFollow {
  follower_id: number;
  following_id: number;
}

@Injectable()
export class FollowersService {

 static api = 'api/followers';


  constructor(private http: Http) { }



  follow(follower: IFollow): Observable<any> {
      return this.http.post(FollowersService.api, follower)
  };

  unfollow(follower: IFollow): Observable<any> {
    return this.http.delete(FollowersService.api, {
      body: follower
    });
  };

}
