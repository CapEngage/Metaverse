import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignUsersListComponent } from './sms-campaign-users-list.component';

describe('SmsCampaignUsersListComponent', () => {
  let component: SmsCampaignUsersListComponent;
  let fixture: ComponentFixture<SmsCampaignUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCampaignUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCampaignUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
