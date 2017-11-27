import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private svc: UsersService) {this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
   
    this.svc.login(this.form.value.email, this.form.value.password)
    .subscribe((user) => {
     this.dialogRef.close();
    })
  }
}
