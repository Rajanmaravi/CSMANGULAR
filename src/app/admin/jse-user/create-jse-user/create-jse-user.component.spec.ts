import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJseUserComponent } from './create-jse-user.component';

describe('CreateJseUserComponent', () => {
  let component: CreateJseUserComponent;
  let fixture: ComponentFixture<CreateJseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateJseUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateJseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
