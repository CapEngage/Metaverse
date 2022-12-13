import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneysRoutingModule } from './journeys-routing.module';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { JourneyCampaignOverviewComponent } from './journey-campaign-overview/journey-campaign-overview.component';
import { JourneyCampaignCreateComponent } from './journey-campaign-create/journey-campaign-create.component';


@NgModule({
  declarations: [
    JourneyOverviewComponent,
    JourneyListComponent,
    JourneyCampaignOverviewComponent,
    JourneyCampaignCreateComponent
  ],
  imports: [
    CommonModule,
    JourneysRoutingModule
  ]
})
export class JourneysModule { }
