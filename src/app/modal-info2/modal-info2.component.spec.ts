import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfo2Component } from './modal-info2.component';

describe('ModalInfo2Component', () => {
  let component: ModalInfo2Component;
  let fixture: ComponentFixture<ModalInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
