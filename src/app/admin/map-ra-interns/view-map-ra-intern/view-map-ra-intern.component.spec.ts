import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMapRaInternComponent } from './view-map-ra-intern.component';

describe('ViewMapRaInternComponent', () => {
  let component: ViewMapRaInternComponent;
  let fixture: ComponentFixture<ViewMapRaInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMapRaInternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMapRaInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
