import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmailCampaignComponent } from './create-email-campaign.component';

describe('CreateEmailCampaignComponent', () => {
  let component: CreateEmailCampaignComponent;
  let fixture: ComponentFixture<CreateEmailCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmailCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmailCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
