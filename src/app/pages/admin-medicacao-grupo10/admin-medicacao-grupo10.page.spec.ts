import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminMedicacaoGrupo10Page } from './admin-medicacao-grupo10.page';

describe('AdminMedicacaoGrupo10Page', () => {
  let component: AdminMedicacaoGrupo10Page;
  let fixture: ComponentFixture<AdminMedicacaoGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMedicacaoGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMedicacaoGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
