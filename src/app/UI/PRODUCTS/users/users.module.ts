import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserAnalyzeComponent } from './user-analyze/user-analyze.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    UserOverviewComponent,
    UserAnalyzeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
    
  ]
})
export class UsersModule { }
