import { TestBed } from '@angular/core/testing';

import { CriancaGrupo10Service } from './crianca-grupo10.service';

describe('CriancaGrupo10Service', () => {
  let service: CriancaGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriancaGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
