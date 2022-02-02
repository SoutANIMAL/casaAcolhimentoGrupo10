import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioGrupo10PageRoutingModule } from './usuario-grupo10-routing.module';

import { UsuarioGrupo10Page } from './usuario-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioGrupo10PageRoutingModule
  ],
  declarations: [UsuarioGrupo10Page]
})
export class UsuarioGrupo10PageModule {}
