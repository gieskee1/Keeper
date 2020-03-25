import { TestBed } from '@angular/core/testing';

import { MachineSelectService } from './machine-select.service';

describe('MachineSelectService', () => {
  let service: MachineSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
