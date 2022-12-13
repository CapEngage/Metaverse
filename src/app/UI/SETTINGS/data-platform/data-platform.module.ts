import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPlatformRoutingModule } from './data-platform-routing.module';
import { IntegrationsComponent } from './integrations/integrations.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { UploadUserDataComponent } from './upload-user-data/upload-user-data.component';
import { UploadEventDataComponent } from './upload-event-data/upload-event-data.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    IntegrationsComponent,
    DataManagementComponent,
    UploadUserDataComponent,
    UploadEventDataComponent
  ],
  imports: [
    CommonModule,
    DataPlatformRoutingModule,
    SharedModule
  ]
})
export class DataPlatformModule { }
