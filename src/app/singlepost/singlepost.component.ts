
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, IChirp } from '../data.service';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
  chirp: IChirp;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  removeChirp() {
    this.dataService.deleteChirp(this.chirp.user_id)
    .subscribe()
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>  {
        return Observable.from(this.dataService.getChirp(params.get('id')))
      })
      .subscribe(chirp => this.chirp = chirp);
  }
}
