import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioGrupo10PageRoutingModule } from './funcionario-grupo10-routing.module';

import { FuncionarioGrupo10Page } from './funcionario-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioGrupo10PageRoutingModule
  ],
  declarations: [FuncionarioGrupo10Page]
})
export class FuncionarioGrupo10PageModule {}
