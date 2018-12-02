import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRouteurComponent } from './edit-routeur.component';

describe('EditRouteurComponent', () => {
  let component: EditRouteurComponent;
  let fixture: ComponentFixture<EditRouteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRouteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
