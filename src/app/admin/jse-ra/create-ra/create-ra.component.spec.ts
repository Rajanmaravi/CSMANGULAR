import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaComponent } from './create-ra.component';

describe('CreateRaComponent', () => {
  let component: CreateRaComponent;
  let fixture: ComponentFixture<CreateRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
