import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCriancaGrupo10PageRoutingModule } from './add-crianca-grupo10-routing.module';

import { AddCriancaGrupo10Page } from './add-crianca-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCriancaGrupo10PageRoutingModule
  ],
  declarations: [AddCriancaGrupo10Page]
})
export class AddCriancaGrupo10PageModule {}
