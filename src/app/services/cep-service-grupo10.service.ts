import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepServiceGrupo10Service {

  constructor(private httpClient: HttpClient) { }

  obterEndereco(cep: String) {
    let url = "https://viacep.com.br/ws/"+cep+"/json/";
    return this.httpClient.get(url).toPromise();
  }
}
