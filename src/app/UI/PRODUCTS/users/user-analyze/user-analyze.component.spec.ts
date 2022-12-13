import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnalyzeComponent } from './user-analyze.component';

describe('UserAnalyzeComponent', () => {
  let component: UserAnalyzeComponent;
  let fixture: ComponentFixture<UserAnalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnalyzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
