import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJseUserComponent } from './view-jse-user.component';

describe('ViewJseUserComponent', () => {
  let component: ViewJseUserComponent;
  let fixture: ComponentFixture<ViewJseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewJseUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewJseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
