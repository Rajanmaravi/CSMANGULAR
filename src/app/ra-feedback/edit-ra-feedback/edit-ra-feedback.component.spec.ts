import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRaFeedbackComponent } from './edit-ra-feedback.component';

describe('EditRaFeedbackComponent', () => {
  let component: EditRaFeedbackComponent;
  let fixture: ComponentFixture<EditRaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
