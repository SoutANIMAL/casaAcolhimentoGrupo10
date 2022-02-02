import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaSaidaGrupo10Service {

  constructor() { }

  salvar(entradaSaida: any) {
    let entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
    if(entradaSaida.id) {
      entradaSaidas[entradaSaida.id] = entradaSaida;
    } else {
      entradaSaidas.push(entradaSaida);
    }
    localStorage.setItem('tbEntradaSaidas', JSON.stringify(entradaSaidas));
  }

  excluir(entradaSaida: any) {
    let entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
    entradaSaidas = entradaSaidas.filter(c=> c.id != entradaSaida.id);
    localStorage.setItem('tbEntradaSaidas', JSON.stringify(entradaSaidas));
    if (entradaSaidas.filter(c=> c.id != entradaSaida.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
    if(!entradaSaidas) {
      entradaSaidas = [];
      localStorage.setItem('tbEntradaSaidas', JSON.stringify(entradaSaidas));
    }
    return entradaSaidas;
  }

  buscarPorId(id: number) {
    let entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
    let entradaSaida = entradaSaidas.find(c => c.id == id);
    console.log(entradaSaida);
    return entradaSaida;
  }

}
