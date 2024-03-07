import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJseUserComponent } from './update-jse-user.component';

describe('UpdateJseUserComponent', () => {
  let component: UpdateJseUserComponent;
  let fixture: ComponentFixture<UpdateJseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateJseUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateJseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
