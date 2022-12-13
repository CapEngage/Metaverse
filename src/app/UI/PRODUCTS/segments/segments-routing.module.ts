import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentCampaignCreateComponent } from './segment-campaign-create/segment-campaign-create.component';
import { SegmentCampaignOverviewComponent } from './segment-campaign-overview/segment-campaign-overview.component';
import { SegmentDashboardComponent } from './segment-dashboard/segment-dashboard.component';

import { SegmentListComponent } from './segment-list/segment-list.component';


const routes: Routes = [
  { path: 'list', component: SegmentListComponent},
  { path: 'overview', component: SegmentDashboardComponent},
  { path: 'create', component: SegmentCampaignCreateComponent},
  { path: 'edit/:id', component: SegmentCampaignCreateComponent},
  { path: 'campaign-dash', component: SegmentCampaignOverviewComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentsRoutingModule { }
