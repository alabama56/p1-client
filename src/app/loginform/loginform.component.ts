import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  public form: FormGroup;
  /*
  form = new FormGroup({
    username: new FormControl("User", [ Validators.required ]),
    password: new FormControl("abc132", [ Validators.required ]),
    remember: new FormControl()
  })
  */
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['blah', Validators.required],
      password: ['abc123', Validators.required],
      remember: [ false, ]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  OnSubmit(jsonForm) {
    console.log(jsonForm);
  }

}
