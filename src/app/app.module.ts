import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Directive, ElementRef, Input, Output  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { AppComponent } from './app.component';
import { NgForOf, Location, CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatSelectModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { CardHoverDirective } from './card-hover.directive';
import { MatDialogModule } from '@angular/material';

//Services
import { DataService, IChirp } from './data.service';
import { UsersService, IUser } from './users.service';

import { AppRoutingModule } from "./app.routing";
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { FollowersService } from './followers.service';
import { DialogOverviewDialog } from './dialog/dialogoverviewdialog.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
{
  path: '',
  component: LoginformComponent
},
{
  path: 'list',
  component: ListComponent
},
{
  path: 'single/:id',
  component: DialogOverviewDialog
},

{
  path: 'profile/:id',
  component: ProfileComponent
}
]

=======
import { UsersPageComponent } from './userspage/users.page.component';


>>>>>>> 275577ee2b116288a4099a58400ae9b9e3fc5cc0


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginformComponent,
    SignupformComponent,
    SinglepostComponent,
    CardHoverDirective,
    DialogOverviewDialog,
<<<<<<< HEAD
    ProfileComponent,

=======
    UsersPageComponent
>>>>>>> 275577ee2b116288a4099a58400ae9b9e3fc5cc0
  ],
  imports: [
    BrowserModule,
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
    CommonModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogOverviewDialog, LoginformComponent],
  providers: [DataService, UsersService, FollowersService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
