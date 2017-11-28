
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';



export interface IChirp  {
    user_id?: string;
    message?: string;
}


@Injectable()
export class DataService {


    static api = '/api/chirps';

    chirps: Array<IChirp> = [];

    constructor(private http: HttpClient) {}

    getChirps(): Observable<any>  {
        return this.http.get(DataService.api)
        .map((chirps: Array<any>) => {
            return chirps.reverse();
        });
    }

    getChirpsByFollowing(id): Observable<any> {
        return this.http.get(`${DataService.api}/subs/${id}`)
    }

    getChirpsByUser(id): Observable<any> {
        return this.http.get(`${DataService.api}/user/${id}`);

    }

    getChirp(id): Observable<any> {
        return this.http.get(`${DataService.api}/${id}`);
        
    }

    updateChirp(id: number, user_id: number, message: string): Observable<any> {
        return this.http.put(DataService.api, {id, user_id, message})
    }

    createChirp(user_id: number, message: string): Observable<any>  {
        return this.http.post(DataService.api, {user_id, message});
       
    }

    deleteChirp(id): Observable<any>  {
        return this.http.delete(`${DataService.api}/${id}`);
        
    }
}
