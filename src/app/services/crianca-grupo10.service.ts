import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriancaGrupo10Service {

  constructor() { }

  salvar(crianca: any) {
    let criancas = JSON.parse(localStorage.getItem('tbCriancas'));
    if(crianca.id) {
      criancas[crianca.id] = crianca;
    } else {
      criancas.push(crianca);
    }
    localStorage.setItem('tbCriancas', JSON.stringify(criancas));
  }

  excluir(crianca: any) {
    let criancas = JSON.parse(localStorage.getItem('tbCriancas'));
    criancas = criancas.filter(c=> c.id != crianca.id);
    localStorage.setItem('tbCriancas', JSON.stringify(criancas));
    if (criancas.filter(c=> c.id != crianca.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let criancas = JSON.parse(localStorage.getItem('tbCriancas'));
    if(!criancas) {
      criancas = [];
      localStorage.setItem('tbCriancas', JSON.stringify(criancas));
    }
    return criancas;
  }

  buscarPorId(id: number) {
    let criancas = JSON.parse(localStorage.getItem('tbCriancas'));
    let crianca = criancas.find(c => c.id == id);
    console.log(crianca);
    return crianca;
  }
}
