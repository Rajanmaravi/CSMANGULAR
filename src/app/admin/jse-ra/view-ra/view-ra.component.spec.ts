import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRaComponent } from './view-ra.component';

describe('ViewRaComponent', () => {
  let component: ViewRaComponent;
  let fixture: ComponentFixture<ViewRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
