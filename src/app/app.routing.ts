import { RouterModule, Routes } from '@angular/router';
import { DialogOverviewDialog } from './dialog/dialogoverviewdialog.component';
import { ListComponent } from "./list/list.component";
import { SignupformComponent } from "./signupform/signupform.component";

import { NgModule }             from '@angular/core';







const appRoutes: Routes = [
    {
      path: 'list',
      component: ListComponent
    },
    {
        path: 'signup',
        component: SignupformComponent
    }
    ];

    @NgModule({
        imports: [ RouterModule.forRoot(appRoutes) ],
        exports: [ RouterModule ]
      })
export class AppRoutingModule {}