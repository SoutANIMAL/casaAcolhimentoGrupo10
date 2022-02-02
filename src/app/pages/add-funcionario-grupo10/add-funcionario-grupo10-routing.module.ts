import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFuncionarioGrupo10Page } from './add-funcionario-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddFuncionarioGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFuncionarioGrupo10PageRoutingModule {}
