import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmailCampaignComponent } from './create-email-campaign/create-email-campaign.component';
import { EmailCampaignsListComponent } from './email-campaigns-list/email-campaigns-list.component';
import { EmailOverviewComponent } from './email-overview/email-overview.component';

const routes: Routes = [
  { path: 'dashboard/overview', component: EmailOverviewComponent },
  { path: 'campaign/list', component: EmailCampaignsListComponent },
  { path: 'campaign/create', component: CreateEmailCampaignComponent },
  { path: 'campaign/edit/:id', component: CreateEmailCampaignComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailMarketingAutomationRoutingModule { }
