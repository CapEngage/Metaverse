import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatSelect } from '@angular/material/select';


import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
interface Website {
  id: string;
  name: string;
}
  
@Component({
  selector: 'app-create-email-campaign',
  templateUrl: './create-email-campaign.component.html',
  styleUrls: ['./create-email-campaign.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class CreateEmailCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
