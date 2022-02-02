import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RefeicaoGrupo10Service } from 'src/app/services/refeicao-grupo10.service';


@Component({
  selector: 'app-add-refeicao-grupo10',
  templateUrl: './add-refeicao-grupo10.page.html',
  styleUrls: ['./add-refeicao-grupo10.page.scss'],
})
export class AddRefeicaoGrupo10Page implements OnInit {

  id: string;
  refeicoes: any = [];
  refeicao = {
    idUnico: null,
    id: null,
    descricao: null,
    data: null,
    funcionario: null
  }
 
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController, private refeicaoGrupo10Service: RefeicaoGrupo10Service) { }
  
  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    } else {
      this.refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
      if(!this.refeicoes) {
        this.refeicoes = [];
        localStorage.setItem('tbRefeicoes', JSON.stringify(this.refeicoes));
      }
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id) {
        this.refeicao = this.refeicoes[this.id];
      } else {
        this.refeicao.id = this.refeicoes.length;
      }
    }
  }

  async submitForm() {
    
    this.refeicoes = JSON.parse(localStorage.getItem('tbRefeicoes'));
    if(this.id) {
      this.refeicoes[this.id] = this.refeicao;
    } else {
      this.refeicao.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.refeicoes.push(this.refeicao);
    }
    
    localStorage.setItem('tbRefeicoes', JSON.stringify(this.refeicoes));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/refeicao-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
