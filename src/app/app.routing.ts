import { RouterModule, Routes } from '@angular/router';
import { DialogOverviewDialog } from './dialog/dialogoverviewdialog.component';
import { ListComponent } from "./list/list.component";
import { SignupformComponent } from "./signupform/signupform.component";
import { UsersPageComponent } from './userspage/userspage.component';
import { ProfileComponent } from "./profile/profile.component"

import { NgModule }             from '@angular/core';







const appRoutes: Routes = [
    {
        path: 'users',
        component: UsersPageComponent
      },
    {
      path: 'list',
      component: ListComponent
    },
    {
        path: 'signup',
        component: SignupformComponent
    },
    {
      path: 'profile/:id',
      component: ProfileComponent
    }
    ];

    @NgModule({
        imports: [ RouterModule.forRoot(appRoutes) ],
        exports: [ RouterModule ]
      })
export class AppRoutingModule {}