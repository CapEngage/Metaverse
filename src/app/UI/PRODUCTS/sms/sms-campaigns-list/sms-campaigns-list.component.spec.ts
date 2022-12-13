import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignsListComponent } from './sms-campaigns-list.component';

describe('SmsCampaignsListComponent', () => {
  let component: SmsCampaignsListComponent;
  let fixture: ComponentFixture<SmsCampaignsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCampaignsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
