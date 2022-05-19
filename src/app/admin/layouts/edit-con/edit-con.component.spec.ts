import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConComponent } from './edit-con.component';

describe('EditConComponent', () => {
  let component: EditConComponent;
  let fixture: ComponentFixture<EditConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
