import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioGrupo10Page } from './usuario-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioGrupo10PageRoutingModule {}
