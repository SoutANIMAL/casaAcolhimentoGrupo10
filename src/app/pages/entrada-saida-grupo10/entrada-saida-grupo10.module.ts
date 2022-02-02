import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaSaidaGrupo10PageRoutingModule } from './entrada-saida-grupo10-routing.module';

import { EntradaSaidaGrupo10Page } from './entrada-saida-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaSaidaGrupo10PageRoutingModule
  ],
  declarations: [EntradaSaidaGrupo10Page]
})
export class EntradaSaidaGrupo10PageModule {}
