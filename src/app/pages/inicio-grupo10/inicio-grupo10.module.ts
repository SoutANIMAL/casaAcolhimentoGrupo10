import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioGrupo10PageRoutingModule } from './inicio-grupo10-routing.module';

import { InicioGrupo10Page } from './inicio-grupo10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioGrupo10PageRoutingModule
  ],
  declarations: [InicioGrupo10Page]
})
export class InicioGrupo10PageModule {}
