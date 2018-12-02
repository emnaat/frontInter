import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerRouteurComponent } from './lister-routeur.component';

describe('ListerRouteurComponent', () => {
  let component: ListerRouteurComponent;
  let fixture: ComponentFixture<ListerRouteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerRouteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
