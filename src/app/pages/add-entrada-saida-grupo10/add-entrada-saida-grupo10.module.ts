import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEntradaSaidaGrupo10PageRoutingModule } from './add-entrada-saida-grupo10-routing.module';

import { AddEntradaSaidaGrupo10Page } from './add-entrada-saida-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEntradaSaidaGrupo10PageRoutingModule
  ],
  declarations: [AddEntradaSaidaGrupo10Page]
})
export class AddEntradaSaidaGrupo10PageModule {}
