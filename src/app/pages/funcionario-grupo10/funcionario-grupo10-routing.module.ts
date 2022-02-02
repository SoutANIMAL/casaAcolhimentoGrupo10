import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioGrupo10Page } from './funcionario-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionarioGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioGrupo10PageRoutingModule {}
