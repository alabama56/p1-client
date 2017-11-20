import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UsersService } from '../users.service'




@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private svc: UsersService
  ) { this.form = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
    age: ['', Validators.required],
  })
}

 ngOnInit() {
  }

  createUser(){
    if (this.form.status !== 'VALID'){
      alert("You must fill out every field correctly to create a user account");
    } else {
      let newUser = (this.form.value)
      this.svc.createUser(newUser)
      .subscribe()
    }
  }

}
