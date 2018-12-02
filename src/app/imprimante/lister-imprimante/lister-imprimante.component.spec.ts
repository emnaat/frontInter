import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerImprimanteComponent } from './lister-imprimante.component';

describe('ListerImprimanteComponent', () => {
  let component: ListerImprimanteComponent;
  let fixture: ComponentFixture<ListerImprimanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerImprimanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerImprimanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
