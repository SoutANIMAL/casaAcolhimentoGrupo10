import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AdminMedicacaoGrupo10Service } from 'src/app/services/admin-medicacao-grupo10.service';

@Component({
  selector: 'app-add-admin-medicacao-grupo10',
  templateUrl: './add-admin-medicacao-grupo10.page.html',
  styleUrls: ['./add-admin-medicacao-grupo10.page.scss'],
})
export class AddAdminMedicacaoGrupo10Page implements OnInit {

  id: string;
  adminMedicacoes: any = [];
  adminMedicacao = {
    idUnico: null,
    id: null,
    descricao: null,
    dataAplicacao: null,
    funcionario: null,
    crianca: null,
    horarioAplicacao: null,
    medicamento: null
  }
 
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController, private adminMedicacaoGrupo10Service: AdminMedicacaoGrupo10Service) { }
  
  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    } else {
      this.adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
      if(!this.adminMedicacoes) {
        this.adminMedicacoes = [];
        localStorage.setItem('tbAdminMedicacoes', JSON.stringify(this.adminMedicacoes));
      }
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id) {
        this.adminMedicacao = this.adminMedicacoes[this.id];
      } else {
        this.adminMedicacao.id = this.adminMedicacoes.length;
      }
    }
  }

  async submitForm() {
    
    this.adminMedicacoes = JSON.parse(localStorage.getItem('tbAdminMedicacoes'));
    if(this.id) {
      this.adminMedicacoes[this.id] = this.adminMedicacao;
    } else {
      this.adminMedicacao.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.adminMedicacoes.push(this.adminMedicacao);
    }
    
    localStorage.setItem('tbAdminMedicacoes', JSON.stringify(this.adminMedicacoes));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/admin-medicacao-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
