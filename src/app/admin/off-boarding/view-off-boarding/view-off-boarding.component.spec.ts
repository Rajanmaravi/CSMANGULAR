import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOffBoardingComponent } from './view-off-boarding.component';

describe('ViewOffBoardingComponent', () => {
  let component: ViewOffBoardingComponent;
  let fixture: ComponentFixture<ViewOffBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOffBoardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOffBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
