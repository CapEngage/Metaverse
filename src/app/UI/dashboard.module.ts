import { NgModule } from "@angular/core";
 

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { EmailMarketingAutomationModule } from "./PRODUCTS/email/email-automation.module";
import { ConfigurationsModule } from "./SETTINGS/configurations/configurations.module";
import { DataPlatformModule } from "./SETTINGS/data-platform/data-platform.module";
import { AnalyticsModule } from "./PRODUCTS/analytics/analytics.module";
import { SegmentsModule } from "./PRODUCTS/segments/segments.module";
import { JourneysModule } from "./PRODUCTS/journeys/journeys.module";
import { WebPushNotificationsModule } from './PRODUCTS/web-push-notifications/web-push-notifications.module';
import { SMSModule } from './PRODUCTS/sms/sms.module';
import { WhatsAppModule } from './PRODUCTS/whats-app/whats-app.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    
    DashboardRoutingModule,
    EmailMarketingAutomationModule,
    ConfigurationsModule,
    DataPlatformModule,
    AnalyticsModule,
    SegmentsModule,
    JourneysModule,
    WebPushNotificationsModule,
    SMSModule,
    WhatsAppModule,
    
  ],
})
export class DashboardModule {}
