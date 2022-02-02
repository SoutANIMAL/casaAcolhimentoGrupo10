import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGrupo10Page } from './login-grupo10.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGrupo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGrupo10PageRoutingModule {}
