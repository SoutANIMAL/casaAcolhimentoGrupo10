import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Funcionarios', url: 'funcionario-grupo10', icon: 'people' },
    { title: 'Crianças', url: 'crianca-grupo10', icon: 'person' },
    { title: 'Entrada/Saída', url: 'entrada-saida-grupo10', icon: 'location' },
    { title: 'Sair', url: 'login-grupo10', icon: 'exit' },
  ];
  constructor() {}
}
