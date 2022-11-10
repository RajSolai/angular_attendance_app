import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDesignationDetailsComponent } from './employee-designation-details.component';

describe('EmployeeDesignationDetailsComponent', () => {
  let component: EmployeeDesignationDetailsComponent;
  let fixture: ComponentFixture<EmployeeDesignationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDesignationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDesignationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
