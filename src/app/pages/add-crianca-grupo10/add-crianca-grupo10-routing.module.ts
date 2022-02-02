import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCriancaGrupo10Page } from './add-crianca-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddCriancaGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCriancaGrupo10PageRoutingModule {}
