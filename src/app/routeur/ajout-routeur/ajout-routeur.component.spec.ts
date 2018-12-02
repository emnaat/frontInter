import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRouteurComponent } from './ajout-routeur.component';

describe('AjoutRouteurComponent', () => {
  let component: AjoutRouteurComponent;
  let fixture: ComponentFixture<AjoutRouteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutRouteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
