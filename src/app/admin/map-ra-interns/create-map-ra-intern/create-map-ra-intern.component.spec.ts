import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMapRaInternComponent } from './create-map-ra-intern.component';

describe('CreateMapRaInternComponent', () => {
  let component: CreateMapRaInternComponent;
  let fixture: ComponentFixture<CreateMapRaInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMapRaInternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMapRaInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
