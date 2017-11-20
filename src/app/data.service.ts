
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';



export interface IChirp  {
    id: string;
    name: string;
    username: string;
    message: string;
}


@Injectable()
export class DataService {


    static api = '/api/chirps';

    chirps: Array<IChirp> = [];

    constructor(private http: HttpClient) {}

    getChirps(): Observable<any>  {
        return this.http.get(DataService.api)
        // .map(chirps => {
        //     return chirps.reverse();
        // });
    }

    getChirpsByUser(id): Observable<any> {
        return this.http.get(`${DataService.api}/user/${id}`);

    }

    getChirp(id): Observable<any> {
        return this.http.get(`${DataService.api}/${id}`);
        
    }

    createChirp(chirp: IChirp): Observable<any>  {
        return this.http.post(DataService.api, chirp);
       
    }

    deleteChirp(id): Observable<any>  {
        return this.http.delete(`${DataService.api}/${id}`);
        
    }
}
