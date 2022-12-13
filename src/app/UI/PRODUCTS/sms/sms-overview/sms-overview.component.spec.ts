import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsOverviewComponent } from './sms-overview.component';

describe('SmsOverviewComponent', () => {
  let component: SmsOverviewComponent;
  let fixture: ComponentFixture<SmsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
