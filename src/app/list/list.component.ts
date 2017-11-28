import { Component, OnInit, Output, EventEmitter, Inject, ViewChild, ElementRef, AfterViewInit, Renderer  } from '@angular/core';
import { DataService, IChirp } from '../data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewDialog } from "../dialog/dialogoverviewdialog.component";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { LoginformComponent } from "../loginform/loginform.component";




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: Array<any>;
  chirp: IChirp;
  form: FormGroup;
  user: any;

  todayDate = new Date();
  @ViewChild('profilePic') el: ElementRef
  
  constructor(private dataService: DataService,
              private fb: FormBuilder, 
              private userSvc: UsersService,
              private router: Router,
              private renderer: Renderer,
              private dialog: MatDialog) 
              {this.form = this.fb.group({
                message: ['', Validators.required]
              }) 
            }

  ngOnInit(): void {
    this.getChirps();
  }

  getChirps() {
    this.dataService.getChirps()
    .subscribe((response) => this.chirps = response);
  }

  ngAfterViewInit() {
    this.userSvc.me()
    .then((user: any) => {
      this.user = user;
      this.renderer.setElementProperty(this.el.nativeElement, "src", user.pro_img);
      
    },
    () => {
      this.openLogInDialog();
    });
  }

  openDialog(chirp): void {
    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '35em',
      data: { chirp }
    });

    dialogRef.componentInstance.onEdit.subscribe((chirp: any) => {
      this.replaceEdittedChirp(chirp);
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.onEdit.unsubscribe();
    });
  }

  replaceEdittedChirp(chirp: any) {
    return this.chirps.map((c) => {
      if (c.id === chirp.id) {
        c = chirp;
      }

      return c;
    });
  }

  subbmitChirp() {
    this.userSvc.me()
    .then((me: any) => {
      let user_id = me.id;
      this.dataService.createChirp(user_id, this.form.value.message)
      .subscribe(() => {
        this.getChirps();
      })
    },() => {
      alert("you must be logged in to chirp")
    })
  }

  openLogInDialog(): void {
    let dialogRef = this.dialog.open(LoginformComponent, {
      width: '30em',
      data: { }
     
    });
  }
}




