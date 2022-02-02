import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { UsuarioGrupo10Service } from 'src/app/services/usuario-grupo10.service';

@Component({
  selector: 'app-login-grupo10',
  templateUrl: './login-grupo10.page.html',
  styleUrls: ['./login-grupo10.page.scss'],
})
export class LoginGrupo10Page implements OnInit {

  usuario = {  
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, private usuarioGrupo10Service: UsuarioGrupo10Service, public menuCtrl: MenuController) { 

    this.menuCtrl.enable(false);

    this.formGroup = this.formBuilder.group({     
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
    this.usuarioGrupo10Service.encerrarAutenticacao();
  }

  async submitForm(){   
    this.usuario.email = this.formGroup.value.email; 
    this.usuario.senha = this.formGroup.value.senha; 
    if(this.usuarioGrupo10Service.autenticar(this.usuario.email, this.usuario.senha)){
      this.navController.navigateBack('/inicio-grupo10');
    }else{
      this.exibirMensagem('E-mail ou senha incorretos');
      this.navController.navigateBack('/login-grupo10');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }
}
