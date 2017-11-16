import { Component, OnInit, Output, EventEmmiter } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '..data/service';
import { ActivatedRoute, ParaMap } from '@angular/router';
import { IChirp, CHIRPS } from '../data';



@Component({
  selector: 'app-list.view.component',
  templateUrl: './list.view.component.component.html',
  styleUrls: ['./list.view.component.component.scss']
})
export class List.View.ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
