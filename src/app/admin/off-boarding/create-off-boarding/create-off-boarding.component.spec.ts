import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffBoardingComponent } from './create-off-boarding.component';

describe('CreateOffBoardingComponent', () => {
  let component: CreateOffBoardingComponent;
  let fixture: ComponentFixture<CreateOffBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOffBoardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOffBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
