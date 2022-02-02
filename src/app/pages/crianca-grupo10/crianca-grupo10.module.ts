import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriancaGrupo10PageRoutingModule } from './crianca-grupo10-routing.module';

import { CriancaGrupo10Page } from './crianca-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriancaGrupo10PageRoutingModule
  ],
  declarations: [CriancaGrupo10Page]
})
export class CriancaGrupo10PageModule {}
