import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { CriancaGrupo10Service } from 'src/app/services/crianca-grupo10.service';

@Component({
  selector: 'app-crianca-grupo10',
  templateUrl: './crianca-grupo10.page.html',
  styleUrls: ['./crianca-grupo10.page.scss'],
})
export class CriancaGrupo10Page implements OnInit {

  criancas: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, public navController: NavController, private criancaGrupo10Service:CriancaGrupo10Service) { }

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
    this.criancas = this.criancaGrupo10Service.listar();
    if (!this.criancas) {
      this.criancas = [];
      localStorage.setItem('tbCriancas', JSON.stringify(this.criancas));
    }
  }

  async buscarPorId(id: number) {
    let crianca;
    crianca = this.criancaGrupo10Service.buscarPorId(id);
  }

  async excluirCrianca(crianca: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: crianca.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.criancaGrupo10Service.excluir(crianca);
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
