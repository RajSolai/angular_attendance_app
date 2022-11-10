import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLeaveManagementComponent } from './request-leave-management.component';

describe('RequestLeaveManagementComponent', () => {
  let component: RequestLeaveManagementComponent;
  let fixture: ComponentFixture<RequestLeaveManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLeaveManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestLeaveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
