import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutimprimanteComponent } from './ajoutimprimante.component';

describe('AjoutimprimanteComponent', () => {
  let component: AjoutimprimanteComponent;
  let fixture: ComponentFixture<AjoutimprimanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutimprimanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutimprimanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
