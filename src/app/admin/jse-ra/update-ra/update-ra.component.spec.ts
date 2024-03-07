import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRaComponent } from './update-ra.component';

describe('UpdateRaComponent', () => {
  let component: UpdateRaComponent;
  let fixture: ComponentFixture<UpdateRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
