import { TestBed } from '@angular/core/testing';

import { EntradaSaidaGrupo10Service } from './entrada-saida-grupo10.service';

describe('EntradaSaidaGrupo10Service', () => {
  let service: EntradaSaidaGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaSaidaGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
