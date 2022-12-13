import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppCampaignsListComponent } from './whats-app-campaigns-list.component';

describe('WhatsAppCampaignsListComponent', () => {
  let component: WhatsAppCampaignsListComponent;
  let fixture: ComponentFixture<WhatsAppCampaignsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppCampaignsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppCampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
