import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTechnologyComponent } from './update-technology.component';

describe('UpdateTechnologyComponent', () => {
  let component: UpdateTechnologyComponent;
  let fixture: ComponentFixture<UpdateTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTechnologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
