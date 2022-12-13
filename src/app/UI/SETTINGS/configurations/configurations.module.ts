import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { DNDComponent } from './dnd/dnd.component';
import { ThrottlingComponent } from './throttling/throttling.component';
import { FrequencyCappingComponent } from './frequency-capping/frequency-capping.component';
import { CustomDomainComponent } from './custom-domain/custom-domain.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    DNDComponent,
    ThrottlingComponent,
    FrequencyCappingComponent,
    CustomDomainComponent,
    
    
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    SharedModule
  ]
})
export class ConfigurationsModule { }
