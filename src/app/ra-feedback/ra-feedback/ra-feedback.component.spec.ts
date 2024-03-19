import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaFeedbackComponent } from './ra-feedback.component';

describe('RaFeedbackComponent', () => {
  let component: RaFeedbackComponent;
  let fixture: ComponentFixture<RaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
