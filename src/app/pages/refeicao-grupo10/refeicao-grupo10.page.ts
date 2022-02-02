import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { RefeicaoGrupo10Service } from 'src/app/services/refeicao-grupo10.service';

@Component({
  selector: 'app-refeicao-grupo10',
  templateUrl: './refeicao-grupo10.page.html',
  styleUrls: ['./refeicao-grupo10.page.scss'],
})
export class RefeicaoGrupo10Page implements OnInit {
 
  refeicoes: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, public navController: NavController, private refeicaoGrupo10Service: RefeicaoGrupo10Service) { }

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
    this.refeicoes = this.refeicaoGrupo10Service.listar();
    if (!this.refeicoes) {
      this.refeicoes = [];
      localStorage.setItem('tbRefeicoes', JSON.stringify(this.refeicoes));
    }
  }

  async buscarPorId(id: number) {
    let refeicao;
    refeicao = this.refeicaoGrupo10Service.buscarPorId(id);
  }

  async excluirRefeicao(refeicao: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: refeicao.data,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.refeicaoGrupo10Service.excluir(refeicao);
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
