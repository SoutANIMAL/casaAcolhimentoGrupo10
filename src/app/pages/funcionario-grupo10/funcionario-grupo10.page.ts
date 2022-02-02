import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FuncionarioGrupo10Service } from 'src/app/services/funcionario-grupo10.service';


@Component({
  selector: 'app-funcionario-grupo10',
  templateUrl: './funcionario-grupo10.page.html',
  styleUrls: ['./funcionario-grupo10.page.scss'],
})
export class FuncionarioGrupo10Page implements OnInit {

  funcionarios: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, public navController: NavController, private funcionarioGrupo10Service:FuncionarioGrupo10Service) { }

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
    this.funcionarios = this.funcionarioGrupo10Service.listar();
    if (!this.funcionarios) {
      this.funcionarios = [];
      localStorage.setItem('tbFuncionarios', JSON.stringify(this.funcionarios));
    }
  }

  async buscarPorId(id: number) {
    let funcionario;
    funcionario = this.funcionarioGrupo10Service.buscarPorId(id);
  }

  async excluirFuncionario(funcionario: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: funcionario.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.funcionarioGrupo10Service.excluir(funcionario);
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
