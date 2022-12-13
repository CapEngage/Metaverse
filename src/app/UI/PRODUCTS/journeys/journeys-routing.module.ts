import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyCampaignCreateComponent } from './journey-campaign-create/journey-campaign-create.component';
import { JourneyCampaignOverviewComponent } from './journey-campaign-overview/journey-campaign-overview.component';

import { JourneyListComponent } from './journey-list/journey-list.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';

const routes: Routes = [
  { path: 'list', component: JourneyListComponent},
  { path: 'overview', component: JourneyOverviewComponent},
  { path: 'create', component: JourneyCampaignCreateComponent},
  { path: 'campaign', component: JourneyCampaignOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JourneysRoutingModule { }
