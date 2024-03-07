import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaFeedbackComponent } from './create-ra-feedback.component';

describe('CreateRaFeedbackComponent', () => {
  let component: CreateRaFeedbackComponent;
  let fixture: ComponentFixture<CreateRaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
