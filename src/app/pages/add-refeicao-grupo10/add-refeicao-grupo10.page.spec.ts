import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRefeicaoGrupo10Page } from './add-refeicao-grupo10.page';

describe('AddRefeicaoGrupo10Page', () => {
  let component: AddRefeicaoGrupo10Page;
  let fixture: ComponentFixture<AddRefeicaoGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRefeicaoGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRefeicaoGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
