import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppOverviewComponent } from './whats-app-overview.component';

describe('WhatsAppOverviewComponent', () => {
  let component: WhatsAppOverviewComponent;
  let fixture: ComponentFixture<WhatsAppOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
