/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TraductionService } from './traduction.service';

describe('TraductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraductionService]
    });
  });

  it('should ...', inject([TraductionService], (service: TraductionService) => {
    expect(service).toBeTruthy();
  }));
});
