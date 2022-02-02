import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRefeicaoGrupo10PageRoutingModule } from './add-refeicao-grupo10-routing.module';

import { AddRefeicaoGrupo10Page } from './add-refeicao-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRefeicaoGrupo10PageRoutingModule
  ],
  declarations: [AddRefeicaoGrupo10Page]
})
export class AddRefeicaoGrupo10PageModule {}
