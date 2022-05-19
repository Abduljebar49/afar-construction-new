import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceConComponent } from './licence-con.component';

describe('LicenceConComponent', () => {
  let component: LicenceConComponent;
  let fixture: ComponentFixture<LicenceConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
