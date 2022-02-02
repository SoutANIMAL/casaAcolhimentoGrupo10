import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { CepServiceGrupo10Service } from 'src/app/services/cep-service-grupo10.service';
import { FuncionarioGrupo10Service } from 'src/app/services/funcionario-grupo10.service';


@Component({
  selector: 'app-add-funcionario-grupo10',
  templateUrl: './add-funcionario-grupo10.page.html',
  styleUrls: ['./add-funcionario-grupo10.page.scss'],
})
export class AddFuncionarioGrupo10Page implements OnInit {

  id: string;
  funcionarios: any = [];
  funcionario = {
    idUnico: null,
    id: null,
    nome: null,
    dataNascimento: null,
    cpf: null,
    celular: null,
    email: null,
    cep: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null,
    funcao: null,
    salario: null
  }
 
  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController, private cepServiceGrupo10Service:CepServiceGrupo10Service, private funcionarioGrupo10Service:FuncionarioGrupo10Service) { }
  
  ngOnInit() {
    let id = localStorage.getItem('usuarioAutenticado');
    if (id == "null") {
      this.navController.navigateBack('/login-grupo10');
    } else {
      this.funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
      if(!this.funcionarios) {
        this.funcionarios = [];
        localStorage.setItem('tbFuncionarios', JSON.stringify(this.funcionarios));
      }
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id) {
        this.funcionario = this.funcionarios[this.id];
      } else {
        this.funcionario.id = this.funcionarios.length;
      }
    }
  }

  async submitForm() {
    
    this.funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    if(this.id) {
      this.funcionarios[this.id] = this.funcionario;
    } else {
      this.funcionario.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.funcionarios.push(this.funcionario);
    }
    
    localStorage.setItem('tbFuncionarios', JSON.stringify(this.funcionarios));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/funcionario-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }


  async preencherEndereco() {
      this.cepServiceGrupo10Service.obterEndereco(this.funcionario.cep)
      .then((json)=>{
        this.funcionario.rua = json['logradouro'];
        this.funcionario.bairro = json['bairro'];
        this.funcionario.cidade = json['localidade'];
        this.funcionario.estado = json['uf'];
      })
      .catch( (erro)=> {
        this.exibirMensagem('Insira um CEP no formato válido!');
        this.funcionario.cep = '';
      });
  }

}
