import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateConComponent } from './certificate-con.component';

describe('CertificateConComponent', () => {
  let component: CertificateConComponent;
  let fixture: ComponentFixture<CertificateConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
