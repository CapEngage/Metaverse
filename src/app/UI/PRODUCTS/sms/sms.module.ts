import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SMSRoutingModule } from './sms-routing.module';

import { SmsOverviewComponent } from './sms-overview/sms-overview.component';
import { SmsCampaignUsersListComponent } from './sms-campaign-users-list/sms-campaign-users-list.component';
import { SmsCampaignAnalyzeComponent } from './sms-campaign-analyze/sms-campaign-analyze.component';
import { SmsCampaignOverviewComponent } from './sms-campaign-overview/sms-campaign-overview.component';
import { SmsCampaignCreateComponent } from './sms-campaign-create/sms-campaign-create.component';
import { SmsCampaignsListComponent } from './sms-campaigns-list/sms-campaigns-list.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    SmsOverviewComponent,
    SmsCampaignUsersListComponent,
    SmsCampaignAnalyzeComponent,
    SmsCampaignOverviewComponent,
    SmsCampaignCreateComponent,
    SmsCampaignsListComponent
  ],
  imports: [
    CommonModule,
    SMSRoutingModule,
    SharedModule
  ]
})
export class SMSModule { }
