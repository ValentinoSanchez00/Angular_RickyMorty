import { TestBed } from '@angular/core/testing';

import { ApiAllCharactersService } from './api-all-characters.service';

describe('ApiAllCharactersService', () => {
  let service: ApiAllCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAllCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
