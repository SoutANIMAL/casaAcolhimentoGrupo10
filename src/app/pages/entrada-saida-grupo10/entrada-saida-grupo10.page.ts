import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { EntradaSaidaGrupo10Service } from 'src/app/services/entrada-saida-grupo10.service';

@Component({
  selector: 'app-entrada-saida-grupo10',
  templateUrl: './entrada-saida-grupo10.page.html',
  styleUrls: ['./entrada-saida-grupo10.page.scss'],
})
export class EntradaSaidaGrupo10Page implements OnInit {
 
  entradaSaidas: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, public navController: NavController, private entradaSaidaGrupo10Service:EntradaSaidaGrupo10Service) { }

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
    this.entradaSaidas = this.entradaSaidaGrupo10Service.listar();
    if (!this.entradaSaidas) {
      this.entradaSaidas = [];
      localStorage.setItem('tbentradaSaidas', JSON.stringify(this.entradaSaidas));
    }
  }

  async buscarPorId(id: number) {
    let entradaSaida;
    entradaSaida = this.entradaSaidaGrupo10Service.buscarPorId(id);
  }

  async excluirEntradaSaida(entradaSaida: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: entradaSaida.nomeCrianca,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.entradaSaidaGrupo10Service.excluir(entradaSaida);
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
