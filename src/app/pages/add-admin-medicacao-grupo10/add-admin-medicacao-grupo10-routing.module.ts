import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAdminMedicacaoGrupo10Page } from './add-admin-medicacao-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: AddAdminMedicacaoGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAdminMedicacaoGrupo10PageRoutingModule {}
