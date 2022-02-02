import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefeicaoGrupo10Page } from './refeicao-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: RefeicaoGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefeicaoGrupo10PageRoutingModule {}
