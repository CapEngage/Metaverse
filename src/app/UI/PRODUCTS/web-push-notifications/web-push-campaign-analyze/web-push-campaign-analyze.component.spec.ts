import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushCampaignAnalyzeComponent } from './web-push-campaign-analyze.component';

describe('WebPushCampaignAnalyzeComponent', () => {
  let component: WebPushCampaignAnalyzeComponent;
  let fixture: ComponentFixture<WebPushCampaignAnalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushCampaignAnalyzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushCampaignAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
