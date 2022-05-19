import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateProComponent } from './certificate-pro.component';

describe('CertificateProComponent', () => {
  let component: CertificateProComponent;
  let fixture: ComponentFixture<CertificateProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
