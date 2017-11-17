
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

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

    getChirps() {
        return this.http.get(DataService.api)
        .map(response => response.json())
        .map(chirps => {
            return chirps.reverse();
        });
    }

    getChirp(id) {
        return this.http.get(`${DataService.api}/${id}`)
        .map(response => response.json());
    }

    createChirp(chirp: IChirp) {
        return this.http.post(DataService.api, chirp)
        .map(response => response.text());
    }

    deleteChirp(id) {
        return this.http.delete(`${DataService.api}/${id}`)
        .map(response => response.text());
    }
}
