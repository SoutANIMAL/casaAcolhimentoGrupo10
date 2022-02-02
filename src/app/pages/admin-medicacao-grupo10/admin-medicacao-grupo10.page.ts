import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AdminMedicacaoGrupo10Service } from 'src/app/services/admin-medicacao-grupo10.service';

@Component({
  selector: 'app-admin-medicacao-grupo10',
  templateUrl: './admin-medicacao-grupo10.page.html',
  styleUrls: ['./admin-medicacao-grupo10.page.scss'],
})
export class AdminMedicacaoGrupo10Page implements OnInit {

  adminMedicacoes: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, public navController: NavController, private adminMedicacaoGrupo10Service: AdminMedicacaoGrupo10Service) { }

  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    }
  }
  
  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.adminMedicacoes = this.adminMedicacaoGrupo10Service.listar();
    if (!this.adminMedicacoes) {
      this.adminMedicacoes = [];
      localStorage.setItem('tbAdminMedicacoes', JSON.stringify(this.adminMedicacoes));
    }
  }

  async buscarPorId(id: number) {
    let adminMedicacao;
    adminMedicacao = this.adminMedicacaoGrupo10Service.buscarPorId(id);
  }

  async excluirAdminMedicacao(adminMedicacao: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: adminMedicacao.crianca,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.adminMedicacaoGrupo10Service.excluir(adminMedicacao);
            if (situacao) {
              location.reload();
              this.exibirMensagem("Registro excluído com sucesso.");
            } else {
              this.exibirMensagem("Não foi possível excluir o registro.");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration:1500
    });
    toast.present();
  }
  

}
