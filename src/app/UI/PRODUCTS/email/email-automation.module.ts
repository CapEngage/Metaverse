import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { SharedModule } from 'app/shared/shared.module';

import { EmailMarketingAutomationRoutingModule } from './email-automation-routing.module';
import { EmailOverviewComponent } from './email-overview/email-overview.component';

import { EmailPreviewLaunchComponent } from './email-preview-launch/email-preview-launch.component';
import { CreateEmailCampaignComponent } from './create-email-campaign/create-email-campaign.component';
import { EmailCampaignsListComponent } from './email-campaigns-list/email-campaigns-list.component';


@NgModule({
  declarations: [
    EmailOverviewComponent,
    EmailPreviewLaunchComponent,
    CreateEmailCampaignComponent,
    EmailCampaignsListComponent,
     
       
  ],
  imports: [
    CommonModule,
  
    SharedModule,
    EmailMarketingAutomationRoutingModule
  ],
  providers: [],
  bootstrap: [CreateEmailCampaignComponent],

})
export class EmailMarketingAutomationModule { }
