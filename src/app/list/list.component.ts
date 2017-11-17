import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: Array<IChirp>;

  todayDate = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getChirps()
    .subscribe((response) => this.chirps = response);
  }
}




