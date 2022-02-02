import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMedicacaoGrupo10Page } from './admin-medicacao-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMedicacaoGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMedicacaoGrupo10PageRoutingModule {}
