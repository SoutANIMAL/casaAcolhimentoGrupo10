import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRefeicaoGrupo10Page } from './add-refeicao-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddRefeicaoGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRefeicaoGrupo10PageRoutingModule {}
