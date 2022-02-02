import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminMedicacaoGrupo10Service {

  constructor() { }

  salvar(adminMedicacao: any) {
    let adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
    if(adminMedicacao.id) {
      adminMedicacoes[adminMedicacao.id] = adminMedicacao;
    } else {
      adminMedicacoes.push(adminMedicacao);
    }
    localStorage.setItem('tbAdminMedicacoes', JSON.stringify(adminMedicacoes));
  }

  excluir(adminMedicacao: any) {
    let adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
    adminMedicacoes = adminMedicacoes.filter(c=> c.id != adminMedicacao.id);
    localStorage.setItem('tbAdminMedicacoes', JSON.stringify(adminMedicacoes));
    if (adminMedicacoes.filter(c=> c.id != adminMedicacao.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
    if(!adminMedicacoes) {
      adminMedicacoes = [];
      localStorage.setItem('tbAdminMedicacoes', JSON.stringify(adminMedicacoes));
    }
    return adminMedicacoes;
  }

  buscarPorId(id: number) {
    let adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
    let adminMedicacao = adminMedicacoes.find(c => c.id == id);
    console.log(adminMedicacao);
    return adminMedicacao;
  }

}
