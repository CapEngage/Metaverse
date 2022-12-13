import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-sms-campaign-create',
  templateUrl: './sms-campaign-create.component.html',
  styleUrls: ['./sms-campaign-create.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false, showError: true},
    },
  ],
})
export class SmsCampaignCreateComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }
  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }


}
