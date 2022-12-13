import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCampaignCreateComponent } from './journey-campaign-create.component';

describe('JourneyCampaignCreateComponent', () => {
  let component: JourneyCampaignCreateComponent;
  let fixture: ComponentFixture<JourneyCampaignCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyCampaignCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
