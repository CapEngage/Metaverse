import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPreviewLaunchComponent } from './email-preview-launch.component';

describe('EmailPreviewLaunchComponent', () => {
  let component: EmailPreviewLaunchComponent;
  let fixture: ComponentFixture<EmailPreviewLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPreviewLaunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailPreviewLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
