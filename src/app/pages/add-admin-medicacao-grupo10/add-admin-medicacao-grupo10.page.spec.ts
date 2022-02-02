import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAdminMedicacaoGrupo10Page } from './add-admin-medicacao-grupo10.page';

describe('AddAdminMedicacaoGrupo10Page', () => {
  let component: AddAdminMedicacaoGrupo10Page;
  let fixture: ComponentFixture<AddAdminMedicacaoGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminMedicacaoGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAdminMedicacaoGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
