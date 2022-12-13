import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentListComponent } from './segment-list/segment-list.component';
import { SegmentCampaignCreateComponent } from './segment-campaign-create/segment-campaign-create.component';
import { SegmentCampaignOverviewComponent } from './segment-campaign-overview/segment-campaign-overview.component';
import { SegmentDashboardComponent } from './segment-dashboard/segment-dashboard.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    
    SegmentListComponent,
    SegmentCampaignCreateComponent,
    SegmentCampaignOverviewComponent,
    SegmentDashboardComponent
  ],
  imports: [
    CommonModule,
    SegmentsRoutingModule,
    SharedModule
  ]
})
export class SegmentsModule { }
