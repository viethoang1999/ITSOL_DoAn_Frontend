import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytuyendungComponent } from './quanlytuyendung.component';

describe('QuanlytuyendungComponent', () => {
  let component: QuanlytuyendungComponent;
  let fixture: ComponentFixture<QuanlytuyendungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlytuyendungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
