import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { CohortAnalyticsComponent } from './cohort-analytics/cohort-analytics.component';
import { FunnelAnalyticsComponent } from './funnel-analytics/funnel-analytics.component';
import { EventAnalyticsComponent } from './event-analytics/event-analytics.component';


@NgModule({
  declarations: [
    CohortAnalyticsComponent,
    FunnelAnalyticsComponent,
    EventAnalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
