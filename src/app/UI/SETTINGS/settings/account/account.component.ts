import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {BrandAccountService } from 'app/SERVICES/BrandAccount.service';


@Component({
    selector       : 'settings-account',
    templateUrl    : './account.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnInit
{
    accountForm: UntypedFormGroup;
    BrandAccountData: any = [];
    Brands:any = [];
    submitted = false;
    brandCode =  localStorage.getItem('brandCode');
    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private actRoute: ActivatedRoute,
    private _BrandAccountService: BrandAccountService,
    private router: Router


    )
    {
         
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        
        this.update_BrandAccount();
        let brandCode =  localStorage.getItem('brandCode');
    let BrandCode = this.actRoute.snapshot.paramMap.get('brandCode');
      console.log(this.brandCode)
    this.get_BrandAccount(BrandCode);
        // Create the form
        this.accountForm = this._formBuilder.group({
            BrandName: [this.brandCode, [Validators.required]],
            username: ['brianh'],
            title   : ['Senior Frontend Developer'],
            company : ['YXZ Software'],
            about   : ['Hey! This is Brian; husband, father and gamer. I\'m mostly passionate about bleeding edge tech and chocolate! 🍫'],
            email   : ['hughes.brian@mail.com', Validators.email],
            phone   : ['121-490-33-12'],
            country : ['usa'],
            language: ['english']
        });
    }

    
    get_BrandAccount(brandCode) {
      brandCode =  localStorage.getItem('brandCode');
        this._BrandAccountService.getBrandAccountById(localStorage.getItem('brandCode')).subscribe((data) => {
          
          console.log(data);
        });
      }
      update_BrandAccount() {
        this.accountForm = this._formBuilder.group({
            BrandName: ['', [Validators.required]],
           
        });
      }

    onSubmit() {
       
      }
}
