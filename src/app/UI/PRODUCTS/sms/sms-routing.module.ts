import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsCampaignCreateComponent } from './sms-campaign-create/sms-campaign-create.component';
import { SmsCampaignOverviewComponent } from './sms-campaign-overview/sms-campaign-overview.component';
import { SmsCampaignUsersListComponent } from './sms-campaign-users-list/sms-campaign-users-list.component';
import { SmsCampaignsListComponent } from './sms-campaigns-list/sms-campaigns-list.component';
import { SmsOverviewComponent } from './sms-overview/sms-overview.component';

const routes: Routes = [
  { path: '', component: SmsOverviewComponent },
  { path: 'overview', component: SmsOverviewComponent },
  { path: 'campaigns/overview', component: SmsCampaignOverviewComponent },
  { path: 'campaigns/users/list', component: SmsCampaignUsersListComponent },
  { path: 'campaign-list', component: SmsCampaignsListComponent },
  { path: 'create', component: SmsCampaignCreateComponent },
  { path: 'edit/:id', component: SmsCampaignCreateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SMSRoutingModule { }
