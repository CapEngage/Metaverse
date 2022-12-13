import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushCampaignsListComponent } from './web-push-campaigns-list.component';

describe('WebPushCampaignsListComponent', () => {
  let component: WebPushCampaignsListComponent;
  let fixture: ComponentFixture<WebPushCampaignsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushCampaignsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushCampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
