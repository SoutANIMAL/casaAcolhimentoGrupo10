import { TestBed } from '@angular/core/testing';

import { FuncionarioGrupo10Service } from './funcionario-grupo10.service';

describe('FuncionarioGrupo10Service', () => {
  let service: FuncionarioGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
