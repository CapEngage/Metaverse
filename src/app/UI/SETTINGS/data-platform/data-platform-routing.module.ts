import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './data-management/data-management.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { UploadEventDataComponent } from './upload-event-data/upload-event-data.component';
import { UploadUserDataComponent } from './upload-user-data/upload-user-data.component';

const routes: Routes = [
  { path: 'integrations', component: IntegrationsComponent},
  { path: 'data-management', component: DataManagementComponent},
  { path: 'upload-events', component: UploadEventDataComponent},
  { path: 'upload-users', component: UploadUserDataComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataPlatformRoutingModule { }
