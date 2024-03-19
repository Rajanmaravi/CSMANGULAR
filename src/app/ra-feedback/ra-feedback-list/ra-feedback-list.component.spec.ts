import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaFeedbackListComponent } from './ra-feedback-list.component';

describe('RaFeedbackListComponent', () => {
  let component: RaFeedbackListComponent;
  let fixture: ComponentFixture<RaFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaFeedbackListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
