import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioGrupo10Page } from './inicio-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: InicioGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioGrupo10PageRoutingModule {}
