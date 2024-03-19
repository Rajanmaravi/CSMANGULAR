import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformRaFeedbackComponent } from './conform-ra-feedback.component';

describe('ConformRaFeedbackComponent', () => {
  let component: ConformRaFeedbackComponent;
  let fixture: ComponentFixture<ConformRaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConformRaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConformRaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
