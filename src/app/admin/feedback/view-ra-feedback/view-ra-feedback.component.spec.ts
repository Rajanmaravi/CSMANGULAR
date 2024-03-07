import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRaFeedbackComponent } from './view-ra-feedback.component';

describe('ViewRaFeedbackComponent', () => {
  let component: ViewRaFeedbackComponent;
  let fixture: ComponentFixture<ViewRaFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRaFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
