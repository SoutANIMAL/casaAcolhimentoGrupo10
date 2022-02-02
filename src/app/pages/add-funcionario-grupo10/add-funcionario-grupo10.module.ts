import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFuncionarioGrupo10PageRoutingModule } from './add-funcionario-grupo10-routing.module';

import { AddFuncionarioGrupo10Page } from './add-funcionario-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFuncionarioGrupo10PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddFuncionarioGrupo10Page]
})
export class AddFuncionarioGrupo10PageModule {}
