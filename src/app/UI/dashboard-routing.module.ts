import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('app/UI/SETTINGS/settings/settings.module').then(m => m.SettingsModule)},
  {path: 'email', loadChildren: () => import('app/UI/PRODUCTS/email/email-automation.module').then(m => m.EmailMarketingAutomationModule)},
  {path: 'sms', loadChildren: () => import('app/UI/PRODUCTS/sms/sms.module').then(m => m.SMSModule)},
  {path: 'users', loadChildren: () => import('app/UI/PRODUCTS/users/users.module').then(m => m.UsersModule)},
  {path: 'segments', loadChildren: () => import('app/UI/PRODUCTS/segments/segments.module').then(m => m.SegmentsModule)},
  {path: 'journeys', loadChildren: () => import('app/UI/PRODUCTS/segments/segments.module').then(m => m.SegmentsModule)},
  {path: 'analytics', loadChildren: () => import('app/UI/PRODUCTS/analytics/analytics.module').then(m => m.AnalyticsModule)},
  {path: 'configuration', loadChildren: () => import('app/UI/SETTINGS/configurations/configurations.module').then(m => m.ConfigurationsModule)},
  {path: 'data-platform', loadChildren: () => import('app/UI/SETTINGS/data-platform/data-platform.module').then(m => m.DataPlatformModule)},
  {path: 'brand', loadChildren: () => import('app/UI/SETTINGS/settings/settings.module').then(m => m.SettingsModule)},
  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
