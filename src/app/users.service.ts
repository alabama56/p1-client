import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Http } from '@angular/http';

//rxjs
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


export interface IUser {
  id: number;
  name: string,
	username: string;
  email: string;
  password: string;
  age: number;
  tagline?: string;
  pro_img?: string;
  background_img?: string;
}


@Injectable()
export class UsersService {

 static api = 'api/users';

 users: Array<IUser> = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(UsersService.api)
      
  }
  getUser(id: number): Observable<any> {
    return this.http.get(`${UsersService.api}/${id}`)
      
  }

  createUser(user: IUser): Observable<any>{
    return this.http.post(UsersService.api, user)
      
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${UsersService.api}/${id}`)
  }



}



