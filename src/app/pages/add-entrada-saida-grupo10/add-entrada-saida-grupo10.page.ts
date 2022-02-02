import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-entrada-saida-grupo10',
  templateUrl: './add-entrada-saida-grupo10.page.html',
  styleUrls: ['./add-entrada-saida-grupo10.page.scss'],
})
export class AddEntradaSaidaGrupo10Page implements OnInit {

  entradaSaidas: any = [];
  id: string;

  entradaSaida = {
    idUnico: null,
    id: null,
    nomeCrianca:null,
    horarioSaida: null,
    dataSaida: null,
    descricao: null,
    horarioEntrada: null,
    dataEntrada: null
  }
 
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }
  
  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    } else {
      this.entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
      if(!this.entradaSaidas) {
        this.entradaSaidas = [];
        localStorage.setItem('tbEntradaSaidas', JSON.stringify(this.entradaSaidas));
      }
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id) {
        this.entradaSaida = this.entradaSaidas[this.id];
      } else {
        this.entradaSaida.id = this.entradaSaidas.length;
      }
    }
  }

  async submitForm() {
    
    this.entradaSaidas = JSON.parse(localStorage.getItem('tbEntradaSaidas'));
    if(this.id) {
      this.entradaSaidas[this.id] = this.entradaSaida;
    } else {
      this.entradaSaida.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.entradaSaidas.push(this.entradaSaida);
    }
    
    localStorage.setItem('tbEntradaSaidas', JSON.stringify(this.entradaSaidas));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/entrada-saida-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
