import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffBoardingComponent } from './update-off-boarding.component';

describe('UpdateOffBoardingComponent', () => {
  let component: UpdateOffBoardingComponent;
  let fixture: ComponentFixture<UpdateOffBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateOffBoardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOffBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
