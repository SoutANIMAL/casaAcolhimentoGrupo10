import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFuncionarioGrupo10Page } from './add-funcionario-grupo10.page';

describe('AddFuncionarioGrupo10Page', () => {
  let component: AddFuncionarioGrupo10Page;
  let fixture: ComponentFixture<AddFuncionarioGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFuncionarioGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
