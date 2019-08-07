import { TestBed } from '@angular/core/testing';

import { MustComponentsService } from './must-components.service';

describe('MustComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MustComponentsService = TestBed.get(MustComponentsService);
    expect(service).toBeTruthy();
  });
});
