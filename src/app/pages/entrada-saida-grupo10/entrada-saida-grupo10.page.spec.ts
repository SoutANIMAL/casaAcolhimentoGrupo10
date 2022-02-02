import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradaSaidaGrupo10Page } from './entrada-saida-grupo10.page';

describe('EntradaSaidaGrupo10Page', () => {
  let component: EntradaSaidaGrupo10Page;
  let fixture: ComponentFixture<EntradaSaidaGrupo10Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaSaidaGrupo10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradaSaidaGrupo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
