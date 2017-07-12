import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanismaComponent } from './tanisma.component';

describe('TanismaComponent', () => {
  let component: TanismaComponent;
  let fixture: ComponentFixture<TanismaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanismaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
