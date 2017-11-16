import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.View.ComponentComponent } from './list.view.component.component';

describe('List.View.ComponentComponent', () => {
  let component: List.View.ComponentComponent;
  let fixture: ComponentFixture<List.View.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.View.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.View.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
