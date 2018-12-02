import { TestBed } from '@angular/core/testing';

import { OrdiserviceService } from './ordiservice.service';

describe('OrdiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdiserviceService = TestBed.get(OrdiserviceService);
    expect(service).toBeTruthy();
  });
});
