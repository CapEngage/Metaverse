import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppCampaignUserListComponent } from './whats-app-campaign-user-list.component';

describe('WhatsAppCampaignUserListComponent', () => {
  let component: WhatsAppCampaignUserListComponent;
  let fixture: ComponentFixture<WhatsAppCampaignUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppCampaignUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppCampaignUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
