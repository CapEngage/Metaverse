import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsAppRoutingModule } from './whats-app-routing.module';
import { WhatsAppCampaignsListComponent } from './whats-app-campaigns-list/whats-app-campaigns-list.component';
import { WhatsAppOverviewComponent } from './whats-app-overview/whats-app-overview.component';
import { WhatsAppCampaignOverviewComponent } from './whats-app-campaign-overview/whats-app-campaign-overview.component';
import { WhatsAppCampaignUserListComponent } from './whats-app-campaign-user-list/whats-app-campaign-user-list.component';
import { WhatsAppCampaignAnalyzeComponent } from './whats-app-campaign-analyze/whats-app-campaign-analyze.component';
import { WhatsAppCampaignCreateComponent } from './whats-app-campaign-create/whats-app-campaign-create.component';


@NgModule({
  declarations: [
    WhatsAppCampaignsListComponent,
    WhatsAppOverviewComponent,
    WhatsAppCampaignOverviewComponent,
    WhatsAppCampaignUserListComponent,
    WhatsAppCampaignAnalyzeComponent,
    WhatsAppCampaignCreateComponent
  ],
  imports: [
    CommonModule,
    WhatsAppRoutingModule
  ]
})
export class WhatsAppModule { }
