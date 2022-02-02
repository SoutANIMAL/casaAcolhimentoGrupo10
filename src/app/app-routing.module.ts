import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-grupo10',
    pathMatch: 'full'
  },
  {
    path: 'inicio-grupo10',
    loadChildren: () => import('./pages/inicio-grupo10/inicio-grupo10.module').then( m => m.InicioGrupo10PageModule)
  },
  {
    path: 'funcionario-grupo10',
    loadChildren: () => import('./pages/funcionario-grupo10/funcionario-grupo10.module').then( m => m.FuncionarioGrupo10PageModule)
  },
  {
    path: 'add-funcionario-grupo10',
    loadChildren: () => import('./pages/add-funcionario-grupo10/add-funcionario-grupo10.module').then( m => m.AddFuncionarioGrupo10PageModule)
  },
  {
    path: 'add-funcionario-grupo10/:id',
    loadChildren: () => import('./pages/add-funcionario-grupo10/add-funcionario-grupo10.module').then( m => m.AddFuncionarioGrupo10PageModule)
  },
  {
    path: 'login-grupo10',
    loadChildren: () => import('./pages/login-grupo10/login-grupo10.module').then( m => m.LoginGrupo10PageModule)
  },
  {
    path: 'crianca-grupo10',
    loadChildren: () => import('./pages/crianca-grupo10/crianca-grupo10.module').then( m => m.CriancaGrupo10PageModule)
  },
  {
    path: 'add-crianca-grupo10',
    loadChildren: () => import('./pages/add-crianca-grupo10/add-crianca-grupo10.module').then( m => m.AddCriancaGrupo10PageModule)
  },
  {
    path: 'add-crianca-grupo10/:id',
    loadChildren: () => import('./pages/add-crianca-grupo10/add-crianca-grupo10.module').then( m => m.AddCriancaGrupo10PageModule)
  },
  {
    path: 'entrada-saida-grupo10',
    loadChildren: () => import('./pages/entrada-saida-grupo10/entrada-saida-grupo10.module').then( m => m.EntradaSaidaGrupo10PageModule)
  },
  {
    path: 'add-entrada-saida-grupo10',
    loadChildren: () => import('./pages/add-entrada-saida-grupo10/add-entrada-saida-grupo10.module').then( m => m.AddEntradaSaidaGrupo10PageModule)
  },
  {
    path: 'add-entrada-saida-grupo10/:id',
    loadChildren: () => import('./pages/add-entrada-saida-grupo10/add-entrada-saida-grupo10.module').then( m => m.AddEntradaSaidaGrupo10PageModule)
  },
  {
    path: 'usuario-grupo10',
    loadChildren: () => import('./pages/usuario-grupo10/usuario-grupo10.module').then( m => m.UsuarioGrupo10PageModule)
  },
  {
    path: 'add-usuario-grupo10',
    loadChildren: () => import('./pages/add-usuario-grupo10/add-usuario-grupo10.module').then( m => m.AddUsuarioGrupo10PageModule)
  },
  {
    path: 'refeicao-grupo10',
    loadChildren: () => import('./pages/refeicao-grupo10/refeicao-grupo10.module').then( m => m.RefeicaoGrupo10PageModule)
  },
  {
    path: 'add-refeicao-grupo10',
    loadChildren: () => import('./pages/add-refeicao-grupo10/add-refeicao-grupo10.module').then( m => m.AddRefeicaoGrupo10PageModule)
  },
  {
    path: 'add-refeicao-grupo10/:id',
    loadChildren: () => import('./pages/add-refeicao-grupo10/add-refeicao-grupo10.module').then( m => m.AddRefeicaoGrupo10PageModule)
  },
  {
    path: 'admin-medicacao-grupo10',
    loadChildren: () => import('./pages/admin-medicacao-grupo10/admin-medicacao-grupo10.module').then( m => m.AdminMedicacaoGrupo10PageModule)
  },
  {
    path: 'add-admin-medicacao-grupo10',
    loadChildren: () => import('./pages/add-admin-medicacao-grupo10/add-admin-medicacao-grupo10.module').then( m => m.AddAdminMedicacaoGrupo10PageModule)
  },
  {
    path: 'add-admin-medicacao-grupo10/:id',
    loadChildren: () => import('./pages/add-admin-medicacao-grupo10/add-admin-medicacao-grupo10.module').then( m => m.AddAdminMedicacaoGrupo10PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
