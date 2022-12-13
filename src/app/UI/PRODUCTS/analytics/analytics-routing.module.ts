import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CohortAnalyticsComponent } from './cohort-analytics/cohort-analytics.component';
import { EventAnalyticsComponent } from './event-analytics/event-analytics.component';
import { FunnelAnalyticsComponent } from './funnel-analytics/funnel-analytics.component';

const routes: Routes = [
 
  { path: 'events', component: EventAnalyticsComponent},
  { path: 'funnels', component: FunnelAnalyticsComponent},
  { path: 'cohorts', component: CohortAnalyticsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
