import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignCreateComponent } from './sms-campaign-create.component';

describe('SmsCampaignCreateComponent', () => {
  let component: SmsCampaignCreateComponent;
  let fixture: ComponentFixture<SmsCampaignCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCampaignCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
