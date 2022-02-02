import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGrupo10Service {

  constructor() { 
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    if(!usuarios){
      usuarios = [];
      localStorage.setItem('tbUsuarios', JSON.stringify(usuarios));
    }
  }

  salvar(usuario: any){
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));

    if(usuario.id){
      let posicao = usuarios.findIndex(c => c.id == usuario.id);
      usuarios[posicao] = usuario;
    }else{
      usuario.id = new Date().getTime();
      usuarios.push(usuario);
    }
    localStorage.setItem('tbUsuarios', JSON.stringify(usuarios));
  }

  excluir(usuario: any){
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    usuarios = usuarios.filter(c => c.id != usuario.id);
    localStorage.setItem('tbUsuarios', JSON.stringify(usuarios));
  }

  listar(){
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    return usuarios;
  }

  buscarPorId(id: number){
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    let usuario = usuarios.find(c => c.id == id);
    return usuario;
  } 

  autenticar(email: string, senha: string){
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    let usuario = usuarios.find(c => c.email == email && c.senha == senha);
    if(usuario){
      localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario.id));
    }
    return usuario;
  }

  recuperarAutenticacao(){
    let id = JSON.parse(localStorage.getItem('usuarioAutenticado'));
    return this.buscarPorId(id);
  } 

  encerrarAutenticacao(){
    localStorage.setItem('usuarioAutenticado', JSON.stringify(null));
  } 

  validarEmail(email: string){
    let validacao =  false;
    let usuarios = JSON.parse(localStorage.getItem('tbUsuarios'));
    let usuario = usuarios.find(c => c.email == email);
    if(usuario){
      validacao = true;
    }
    return validacao;
  }

}
