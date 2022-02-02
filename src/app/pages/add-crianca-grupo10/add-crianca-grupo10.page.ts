import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-add-crianca-grupo10',
  templateUrl: './add-crianca-grupo10.page.html',
  styleUrls: ['./add-crianca-grupo10.page.scss'],
})
export class AddCriancaGrupo10Page implements OnInit {

  criancas: any = [];
  id: string;

  crianca = {
    idUnico: null,
    id: null,
    nome: null,
    dataNascimento: null,
    cpf: null,
    descricao: null,
    naturalidade: null
  }
 
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }
  
  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    } else {
      this.criancas = JSON.parse(localStorage.getItem('tbCriancas'));
      if(!this.criancas) {
        this.criancas = [];
        localStorage.setItem('tbCriancas', JSON.stringify(this.criancas));
      }
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id) {
        this.crianca = this.criancas[this.id];
      } else {
        this.crianca.id = this.criancas.length;
      }
    }
  }

  async submitForm() {
    
    this.criancas = JSON.parse(localStorage.getItem('tbCriancas'));
    if(this.id) {
      this.criancas[this.id] = this.crianca;
    } else {
      this.crianca.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.criancas.push(this.crianca);
    }
    
    localStorage.setItem('tbCriancas', JSON.stringify(this.criancas));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/crianca-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  
}
