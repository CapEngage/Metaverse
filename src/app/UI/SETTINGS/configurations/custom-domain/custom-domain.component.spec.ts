import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDomainComponent } from './custom-domain.component';

describe('CustomDomainComponent', () => {
  let component: CustomDomainComponent;
  let fixture: ComponentFixture<CustomDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
