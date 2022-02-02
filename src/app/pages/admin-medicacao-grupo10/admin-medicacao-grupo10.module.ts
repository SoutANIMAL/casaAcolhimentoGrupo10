import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMedicacaoGrupo10PageRoutingModule } from './admin-medicacao-grupo10-routing.module';

import { AdminMedicacaoGrupo10Page } from './admin-medicacao-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMedicacaoGrupo10PageRoutingModule
  ],
  declarations: [AdminMedicacaoGrupo10Page]
})
export class AdminMedicacaoGrupo10PageModule {}
