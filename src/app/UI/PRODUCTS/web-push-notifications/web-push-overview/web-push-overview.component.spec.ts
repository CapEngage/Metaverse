import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPushOverviewComponent } from './web-push-overview.component';

describe('WebPushOverviewComponent', () => {
  let component: WebPushOverviewComponent;
  let fixture: ComponentFixture<WebPushOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPushOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPushOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
