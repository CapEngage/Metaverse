import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushCampaignCreateComponent } from './web-push-campaign-create.component';

describe('WebPushCampaignCreateComponent', () => {
  let component: WebPushCampaignCreateComponent;
  let fixture: ComponentFixture<WebPushCampaignCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushCampaignCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
