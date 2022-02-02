import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaSaidaGrupo10Page } from './entrada-saida-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaSaidaGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaSaidaGrupo10PageRoutingModule {}
