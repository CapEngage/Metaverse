import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOverviewComponent } from './email-overview.component';

describe('EmailOverviewComponent', () => {
  let component: EmailOverviewComponent;
  let fixture: ComponentFixture<EmailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
