import { TestBed } from '@angular/core/testing';

import { CepServiceGrupo10Service } from './cep-service-grupo10.service';

describe('CepServiceGrupo10Service', () => {
  let service: CepServiceGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepServiceGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
