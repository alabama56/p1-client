import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Directive, ElementRef, Input, Output  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { AppComponent } from './app.component';
import { NgForOf, Location, CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatSelectModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { DataService, IChirp } from './data.service';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { SinglepostComponent } from './singlepost/singlepost.component';

const appRoutes: Routes = [
{
  path: '',
  component: LoginformComponent
},
{
  path: 'list',
  component: ListComponent
},
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginformComponent,
    SignupformComponent,
    SinglepostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    HttpModule,
    CommonModule
  ],
  providers: [DataService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
