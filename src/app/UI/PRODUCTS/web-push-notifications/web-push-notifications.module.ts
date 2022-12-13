import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPushNotificationsRoutingModule } from './web-push-notifications-routing.module';
import { WebPushOverviewComponent } from './web-push-overview/web-push-overview.component';
import { WebPushCampaignsListComponent } from './web-push-campaigns-list/web-push-campaigns-list.component';
import { WebPushCampaignOverviewComponent } from './web-push-campaign-overview/web-push-campaign-overview.component';
import { WebPushCampaignCreateComponent } from './web-push-campaign-create/web-push-campaign-create.component';
import { WebPushCampaignAnalyzeComponent } from './web-push-campaign-analyze/web-push-campaign-analyze.component';
import { WebPushCampaignUsersListComponent } from './web-push-campaign-users-list/web-push-campaign-users-list.component';


@NgModule({
  declarations: [
    WebPushOverviewComponent,
    WebPushCampaignsListComponent,
    WebPushCampaignOverviewComponent,
    WebPushCampaignCreateComponent,
    WebPushCampaignAnalyzeComponent,
    WebPushCampaignUsersListComponent
  ],
  imports: [
    CommonModule,
    WebPushNotificationsRoutingModule
  ]
})
export class WebPushNotificationsModule { }
