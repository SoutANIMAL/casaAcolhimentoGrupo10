import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginGrupo10PageRoutingModule } from './login-grupo10-routing.module';

import { LoginGrupo10Page } from './login-grupo10.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginGrupo10PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginGrupo10Page]
})
export class LoginGrupo10PageModule {}
