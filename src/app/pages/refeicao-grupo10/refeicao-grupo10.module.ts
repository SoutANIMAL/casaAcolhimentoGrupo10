import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefeicaoGrupo10PageRoutingModule } from './refeicao-grupo10-routing.module';

import { RefeicaoGrupo10Page } from './refeicao-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefeicaoGrupo10PageRoutingModule
  ],
  declarations: [RefeicaoGrupo10Page]
})
export class RefeicaoGrupo10PageModule {}
