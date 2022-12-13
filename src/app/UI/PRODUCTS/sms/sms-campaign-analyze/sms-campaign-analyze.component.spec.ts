import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignAnalyzeComponent } from './sms-campaign-analyze.component';

describe('SmsCampaignAnalyzeComponent', () => {
  let component: SmsCampaignAnalyzeComponent;
  let fixture: ComponentFixture<SmsCampaignAnalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCampaignAnalyzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCampaignAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
