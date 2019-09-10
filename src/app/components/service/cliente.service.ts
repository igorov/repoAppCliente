import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cliente} from "../model/cliente.model";
import {Estadistica} from "../model/estadistica.model";

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://rest-api-1-env.eaggrsx3b6.us-east-1.elasticbeanstalk.com/cliente';

  getClientes() {
    return this.http.get<Cliente[]>(this.baseUrl + '/listclientes');
  }

  createCliente(cliente: Cliente) {
    return this.http.post(this.baseUrl + '/creacliente', cliente);
  }

  getStats() {
    return this.http.get<Estadistica>(this.baseUrl + '/kpideclientes');
  }
}
