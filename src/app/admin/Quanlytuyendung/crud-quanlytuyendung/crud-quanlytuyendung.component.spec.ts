import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudQuanlytuyendungComponent } from './crud-quanlytuyendung.component';

describe('CrudQuanlytuyendungComponent', () => {
  let component: CrudQuanlytuyendungComponent;
  let fixture: ComponentFixture<CrudQuanlytuyendungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudQuanlytuyendungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudQuanlytuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
