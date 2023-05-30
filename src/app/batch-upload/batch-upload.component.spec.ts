import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchUploadComponent } from './batch-upload.component';

describe('BatchUploadComponent', () => {
  let component: BatchUploadComponent;
  let fixture: ComponentFixture<BatchUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
