import { TestBed } from '@angular/core/testing';

import { ApiOneCharacterByIdService } from './api-one-character-by-id.service';

describe('ApiOneCharacterByIdService', () => {
  let service: ApiOneCharacterByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOneCharacterByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
