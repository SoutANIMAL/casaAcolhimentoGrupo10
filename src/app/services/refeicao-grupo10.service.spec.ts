import { TestBed } from '@angular/core/testing';

import { RefeicaoGrupo10Service } from './refeicao-grupo10.service';

describe('RefeicaoGrupo10Service', () => {
  let service: RefeicaoGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefeicaoGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
