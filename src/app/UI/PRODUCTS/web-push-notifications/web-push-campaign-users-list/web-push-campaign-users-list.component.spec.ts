import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushCampaignUsersListComponent } from './web-push-campaign-users-list.component';

describe('WebPushCampaignUsersListComponent', () => {
  let component: WebPushCampaignUsersListComponent;
  let fixture: ComponentFixture<WebPushCampaignUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushCampaignUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushCampaignUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
