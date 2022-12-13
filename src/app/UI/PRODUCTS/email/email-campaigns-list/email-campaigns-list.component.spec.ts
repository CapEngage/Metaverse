import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCampaignsListComponent } from './email-campaigns-list.component';

describe('EmailCampaignsListComponent', () => {
  let component: EmailCampaignsListComponent;
  let fixture: ComponentFixture<EmailCampaignsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCampaignsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
