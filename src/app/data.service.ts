
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';



export interface IChirp  {
    id: string;
    user: string;
    message: string;
}


@Injectable()
export class DataService {


    static api = 'api/chirps';

    chirps: Array<IChirp> = [];

    constructor(private http: Http) {}

    getChirps(): Observable<any>  {
        return this.http.get(DataService.api)
        .map(response => response.json())
        .map(chirps => {
            return chirps.reverse();
        });
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
