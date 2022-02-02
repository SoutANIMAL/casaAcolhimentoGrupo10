import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioGrupo10Service } from 'src/app/services/usuario-grupo10.service';

@Component({
  selector: 'app-add-usuario-grupo10',
  templateUrl: './add-usuario-grupo10.page.html',
  styleUrls: ['./add-usuario-grupo10.page.scss'],
})
export class AddUsuarioGrupo10Page implements OnInit {

  usuario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, private usuarioGrupo10Service: UsuarioGrupo10Service) { 
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'email':['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'senha':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {
  }

  async submitForm(){    
    this.usuario.nome = this.formGroup.value.nome; 
    this.usuario.email = this.formGroup.value.email; 
    this.usuario.senha = this.formGroup.value.senha; 
    this.usuarioGrupo10Service.salvar(this.usuario);  
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/login-grupo10');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
