import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from "@angular/common";

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
              private route: ActivatedRoute,
              private loc: Location) 
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
      this.svc.updateUser(id, updatedInfo)
    .subscribe(() => {
      this.dialogRef.close()
      this.refresh()
    })
  }

  deleteUser(){
    let id = (this.data.user.id)
    if (confirm("Delete this user?") == true) {
      console.log(id)
      this.svc.deleteUser(id)
      .subscribe(() => {
      })
      this.goBack();
    }
    
  }

  refresh(){
    this.router.navigate(["/users"])
  }

  goBack() {
    this.loc.back();
  }
}

// res => {this.router.navigate([`/list`])}