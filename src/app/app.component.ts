import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
     _weAccountList:any = [];
         
  
   
    /**
     * Constructor
     */
    constructor( private router: Router, private activatedRoute: ActivatedRoute)
    {
        let weAccountList =  {'brandCode': 'CE7725599A', 'name': 'CapEngage', 'showJourney':true};
        console.log(weAccountList.brandCode)
        let brandCode = this.activatedRoute.snapshot.paramMap.get(weAccountList.brandCode) || 'CE7725599A';
       
        console.log('Br' + brandCode)

        //this.router.navigate(['dash', brandCode])
        localStorage.setItem('brandCode', brandCode);
        let _brandCode =  localStorage.getItem('brandCode');
        //this.router.navigate(['dash/', _brandCode])
        console.log(_brandCode)
        
        
        
    }
}
