import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedRaFeedbackComponent } from './validated-ra-feedback.component';

describe('ValidatedRaFeedbackComponent', () => {
  let component: ValidatedRaFeedbackComponent;
  let fixture: ComponentFixture<ValidatedRaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatedRaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatedRaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
