import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@CapEngage/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsComponent } from 'app/UI/SETTINGS/settings/settings.component';
import { SettingsAccountComponent } from 'app/UI/SETTINGS/settings/account/account.component';
import { SettingsSecurityComponent } from 'app/UI/SETTINGS/settings/security/security.component';
import { SettingsPlanBillingComponent } from 'app/UI/SETTINGS/settings/plan-billing/plan-billing.component';
import { SettingsNotificationsComponent } from 'app/UI/SETTINGS/settings/notifications/notifications.component';
import { SettingsTeamComponent } from 'app/UI/SETTINGS/settings/team/team.component';
import { settingsRoutes } from 'app/UI/SETTINGS/settings/settings.routing';

@NgModule({
    declarations: [
        SettingsComponent,
        SettingsAccountComponent,
        SettingsSecurityComponent,
        SettingsPlanBillingComponent,
        SettingsNotificationsComponent,
        SettingsTeamComponent
    ],
    imports     : [
        RouterModule.forChild(settingsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class SettingsModule
{
}
