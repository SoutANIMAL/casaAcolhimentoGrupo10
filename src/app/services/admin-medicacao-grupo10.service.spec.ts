import { TestBed } from '@angular/core/testing';

import { AdminMedicacaoGrupo10Service } from './admin-medicacao-grupo10.service';

describe('AdminMedicacaoGrupo10Service', () => {
  let service: AdminMedicacaoGrupo10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMedicacaoGrupo10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
