import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizkimizComponent } from './bizkimiz.component';

describe('BizkimizComponent', () => {
  let component: BizkimizComponent;
  let fixture: ComponentFixture<BizkimizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizkimizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizkimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
