import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SegmentService } from 'app/_Services/Segment.service';
import { FuseConfirmationService } from '@CapEngage/services/confirmation';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-segment-campaign-create',
  templateUrl: './segment-campaign-create.component.html',
  styleUrls: ['./segment-campaign-create.component.scss']
})
export class SegmentCampaignCreateComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  constructor(
    private _SegmentService: SegmentService,
    private _fuseConfirmationService: FuseConfirmationService,
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
  ) { }

 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
       this.form = this.formBuilder.group({
        SegmentName: ['', Validators.required],
        BrandCode: ['6367f3e1704681208a35d4a2', Validators.required],
            
        });

        if (!this.isAddMode) {
            this._SegmentService.getSegmentById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
   // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    if (this.isAddMode) {
        this.createUser();
    } else {
        this.updateUser();
    }
}

private createUser() {
  this._SegmentService.createSegment(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // this.alertService.success('User added', { keepAfterRouteChange: true });
              this.router.navigate(['../list'], { relativeTo: this.route });
          },
          error: error => {
              // this.alertService.error(error);
              this.loading = false;
          }
      });
}


private updateUser() {
  this._SegmentService.updateSegmentById(this.id, this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // this.alertService.success('User updated', { keepAfterRouteChange: true });
              this.router.navigate(['../../'], { relativeTo: this.route });
          },
          error: error => {
             //  this.alertService.error(error);
              this.loading = false;
          }
      });
}
}
 
