import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEventDataComponent } from './upload-event-data.component';

describe('UploadEventDataComponent', () => {
  let component: UploadEventDataComponent;
  let fixture: ComponentFixture<UploadEventDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadEventDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadEventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
