import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImprimanteComponent } from './edit-imprimante.component';

describe('EditImprimanteComponent', () => {
  let component: EditImprimanteComponent;
  let fixture: ComponentFixture<EditImprimanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImprimanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImprimanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
