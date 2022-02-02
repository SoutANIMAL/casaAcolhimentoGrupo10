import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioGrupo10Service {

  constructor() { }

  salvar(funcionario: any) {
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    if(funcionario.id) {
      console.log("entrou no if");
      funcionarios[funcionario.id] = funcionario;
      console.log(funcionarios[funcionario.id]);
    } else {
      funcionarios.push(funcionario);
    }
    localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
  }

  excluir(funcionario: any) {
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    funcionarios = funcionarios.filter(c=> c.id != funcionario.id);
    localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
    if (funcionarios.filter(c=> c.id != funcionario.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    if(!funcionarios) {
      funcionarios = [];
      localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
    }
    return funcionarios;
  }

  buscarPorId(id: number) {
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    let funcionario = funcionarios.find(c => c.id == id);
    console.log(funcionario);
    return funcionario;
  }

  validarEmail(email: string){
    let validacao =  false;
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    let funcionario = funcionarios.find(c => c.email == email);
    if(funcionario){
      validacao = true;
    }
    return validacao;
  }

  validarCelular (celular: string) {
    let validacao = false
    var regex = new RegExp('^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$');
    validacao = regex.test(celular);
    return validacao;
}

  validarCpf(cpf: string) {
    let validacao = false;
    if (cpf == null) {
        return validacao;
    }
    if (cpf.length != 11) {
        return validacao;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return validacao;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
        caracter = cpfAux.charAt(i);
        if (numeros.search(caracter) == -1) {
            return validacao;
        }
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
        digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
        caracter = cpfAux.charAt(i);
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
        digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
        return validacao;
    }
    else {
        validacao = true;
        return validacao;
    }
}

}
