import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppCampaignCreateComponent } from './whats-app-campaign-create.component';

describe('WhatsAppCampaignCreateComponent', () => {
  let component: WhatsAppCampaignCreateComponent;
  let fixture: ComponentFixture<WhatsAppCampaignCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppCampaignCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
