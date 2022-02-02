import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefeicaoGrupo10Page } from './refeicao-grupo10.page';

describe('RefeicaoGrupo10Page', () => {
  let component: RefeicaoGrupo10Page;
  let fixture: ComponentFixture<RefeicaoGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RefeicaoGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefeicaoGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
