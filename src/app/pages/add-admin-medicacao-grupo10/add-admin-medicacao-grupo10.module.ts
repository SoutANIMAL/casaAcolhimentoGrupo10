import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAdminMedicacaoGrupo10PageRoutingModule } from './add-admin-medicacao-grupo10-routing.module';

import { AddAdminMedicacaoGrupo10Page } from './add-admin-medicacao-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAdminMedicacaoGrupo10PageRoutingModule
  ],
  declarations: [AddAdminMedicacaoGrupo10Page]
})
export class AddAdminMedicacaoGrupo10PageModule {}
