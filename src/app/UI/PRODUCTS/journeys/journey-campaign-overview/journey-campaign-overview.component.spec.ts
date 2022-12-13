import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCampaignOverviewComponent } from './journey-campaign-overview.component';

describe('JourneyCampaignOverviewComponent', () => {
  let component: JourneyCampaignOverviewComponent;
  let fixture: ComponentFixture<JourneyCampaignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyCampaignOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyCampaignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
