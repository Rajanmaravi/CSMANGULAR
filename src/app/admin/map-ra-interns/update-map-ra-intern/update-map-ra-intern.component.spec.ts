import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMapRaInternComponent } from './update-map-ra-intern.component';

describe('UpdateMapRaInternComponent', () => {
  let component: UpdateMapRaInternComponent;
  let fixture: ComponentFixture<UpdateMapRaInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMapRaInternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMapRaInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
