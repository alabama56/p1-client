import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewDialog } from './dialogoverviewdialog.component';

describe('DialogoverviewdialogComponent', () => {
  let component: DialogOverviewDialog;
  let fixture: ComponentFixture<DialogOverviewDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
