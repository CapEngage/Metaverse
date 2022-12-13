import { Router } from '@angular/router';
import { EventUploadService } from 'app/SERVICES/event-upload.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-event-data',
  templateUrl: './upload-event-data.component.html',
  styleUrls: ['./upload-event-data.component.scss']
})
export class UploadEventDataComponent implements OnInit {
  submitted = false;
  eventUploadForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private _EventUploadService: EventUploadService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.eventUploadForm = this.fb.group({
      EventCsvFile: ['', [Validators.required]],
      
    });
  }

  // Getter to access form control
  get myForm() {
    return this.eventUploadForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (!this.eventUploadForm.valid) {
      return false;
    } else {
      return this._EventUploadService.uploadEvent(this.eventUploadForm.value).subscribe({
        complete: () => {
          console.log('Event Upload successfully!'),
            this.ngZone.run(() => this.router.navigateByUrl('/dash'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}