import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEntradaSaidaGrupo10Page } from './add-entrada-saida-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddEntradaSaidaGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEntradaSaidaGrupo10PageRoutingModule {}
