import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJseUserComponent } from './upload-jse-user.component';

describe('UploadJseUserComponent', () => {
  let component: UploadJseUserComponent;
  let fixture: ComponentFixture<UploadJseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadJseUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadJseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
