import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoGrupo10Service {

  constructor() { }

  salvar(refeicao: any) {
    let refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
    if(refeicao.id) {
      refeicoes[refeicao.id] = refeicao;
    } else {
      refeicoes.push(refeicao);
    }
    localStorage.setItem('tbRefeicoes', JSON.stringify(refeicoes));
  }

  excluir(refeicao: any) {
    let refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
    refeicoes = refeicoes.filter(c=> c.id != refeicao.id);
    localStorage.setItem('tbRefeicoes', JSON.stringify(refeicoes));
    if (refeicoes.filter(c=> c.id != refeicao.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
    if(!refeicoes) {
      refeicoes = [];
      localStorage.setItem('tbRefeicoes', JSON.stringify(refeicoes));
    }
    return refeicoes;
  }

  buscarPorId(id: number) {
    let refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
    let refeicao = refeicoes.find(c => c.id == id);
    console.log(refeicao);
    return refeicao;
  }

}
