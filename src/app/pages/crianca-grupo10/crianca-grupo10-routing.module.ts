import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriancaGrupo10Page } from './crianca-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: CriancaGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriancaGrupo10PageRoutingModule {}
