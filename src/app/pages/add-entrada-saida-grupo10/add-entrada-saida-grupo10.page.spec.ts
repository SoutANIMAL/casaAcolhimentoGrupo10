import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEntradaSaidaGrupo10Page } from './add-entrada-saida-grupo10.page';

describe('AddEntradaSaidaGrupo10Page', () => {
  let component: AddEntradaSaidaGrupo10Page;
  let fixture: ComponentFixture<AddEntradaSaidaGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntradaSaidaGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEntradaSaidaGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
