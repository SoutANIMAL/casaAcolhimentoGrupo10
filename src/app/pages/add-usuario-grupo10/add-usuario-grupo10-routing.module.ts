import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsuarioGrupo10Page } from './add-usuario-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUsuarioGrupo10PageRoutingModule {}
