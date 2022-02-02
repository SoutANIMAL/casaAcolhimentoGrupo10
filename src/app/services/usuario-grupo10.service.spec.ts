import { TestBed } from '@angular/core/testing';

import { UsuarioGrupo10Service } from './usuario-grupo10.service';

describe('UsuarioGrupo10Service', () => {
  let service: UsuarioGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
