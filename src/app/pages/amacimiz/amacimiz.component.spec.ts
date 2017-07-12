import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmacimizComponent } from './amacimiz.component';

describe('AmacimizComponent', () => {
  let component: AmacimizComponent;
  let fixture: ComponentFixture<AmacimizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmacimizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmacimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
