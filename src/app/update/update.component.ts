import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<UpdateComponent>,
              private router: Router,
              private fb: FormBuilder,
              private svc: UsersService,
              private route: ActivatedRoute,) 
              { this.form = this.fb.group({
                name: [],
                username: [],
                email: [],
                password: [],
                age: [],
                tagline: [],
                pro_img: [],
                background_img: []
              })}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser(){
      let updatedInfo = (this.form.value)
      let id = (this.data.user.id)
      console.log(id);
      this.svc.updateUser(id, updatedInfo)
    .subscribe()
      
  }
}

// res => {this.router.navigate([`/list`])}