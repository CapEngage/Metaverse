import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppCampaignAnalyzeComponent } from './whats-app-campaign-analyze.component';

describe('WhatsAppCampaignAnalyzeComponent', () => {
  let component: WhatsAppCampaignAnalyzeComponent;
  let fixture: ComponentFixture<WhatsAppCampaignAnalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppCampaignAnalyzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppCampaignAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
