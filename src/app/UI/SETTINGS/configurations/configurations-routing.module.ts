import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomDomainComponent } from './custom-domain/custom-domain.component';
import { DNDComponent } from './dnd/dnd.component';
import { FrequencyCappingComponent } from './frequency-capping/frequency-capping.component';
import { ThrottlingComponent } from './throttling/throttling.component';

const routes: Routes = [
  
  { path: 'dnd', component: DNDComponent},
  { path: 'custom-domain', component: CustomDomainComponent},
  { path: 'frequency-capping', component: FrequencyCappingComponent},
  { path: 'throttling', component: ThrottlingComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
