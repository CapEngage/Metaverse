import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyCappingComponent } from './frequency-capping.component';

describe('FrequencyCappingComponent', () => {
  let component: FrequencyCappingComponent;
  let fixture: ComponentFixture<FrequencyCappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencyCappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyCappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
