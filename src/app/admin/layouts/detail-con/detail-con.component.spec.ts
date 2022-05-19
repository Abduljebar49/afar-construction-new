import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConComponent } from './detail-con.component';

describe('DetailConComponent', () => {
  let component: DetailConComponent;
  let fixture: ComponentFixture<DetailConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
