import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatSelect } from '@angular/material/select';

import { CampaignEmailAutomationService } from 'app/_Services/CampaignEmailAutomation.service';
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
  getId: any;
  EmailCampaignDetailsById:any = [];
  firstFormGroup: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  protected websites: Website[] = [
    {id: '1', name: 'ItSolutionStuff.com'},
    {id: '2', name: 'HDTuto.com'},
    {id: '3', name: 'Nicesnippets.com'},
    {id: '4', name: 'Google.com'},
    {id: '5', name: 'laravel.com'},
    {id: '6', name: 'npmjs.com'},
  ];
  
  toppings = new FormControl('');
  toppingLists: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  myControl = new FormControl('');

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
     private _CampaignEmailAutomationService: CampaignEmailAutomationService, 
     private activatedRoute: ActivatedRoute) {

      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this._CampaignEmailAutomationService.getCampaignEmailAutomationById(this.getId).subscribe(res => {
      console.log(res);
      this.EmailCampaignDetailsById =res;
      this.firstFormGroup.setValue({
        licenseCode: res['licenseCode']
        
      });
    });
    this.firstFormGroup = this._formBuilder.group({
      licenseCode: [''],
      
    })
     }
  ngOnInit(): void {
    this._CampaignEmailAutomationService.getAllCampaignEmailAutomation().subscribe(res => {
      console.log(res)
      
    }); 
    {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    }   
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this._CampaignEmailAutomationService.deleteCampaignEmailAutomationById(id).subscribe((res) => {
        this.EmailCampaignDetailsById.splice(i, 1);
      })
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.toppingLists.filter(option => option.toLowerCase().includes(filterValue));
  }

  Submit(){
    console.log(this.firstFormGroup.value)
  }

}