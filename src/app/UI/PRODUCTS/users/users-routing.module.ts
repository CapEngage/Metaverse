import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAnalyzeComponent } from './user-analyze/user-analyze.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';

const routes: Routes = [
  
  { path: 'overview', component: UserOverviewComponent},
  { path: 'analyze', component: UserAnalyzeComponent},
  { path: 'list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
