import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUsuarioGrupo10PageRoutingModule } from './add-usuario-grupo10-routing.module';

import { AddUsuarioGrupo10Page } from './add-usuario-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUsuarioGrupo10PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddUsuarioGrupo10Page]
})
export class AddUsuarioGrupo10PageModule {}
