import { Component, OnInit } from '@angular/core';
import {Cliente} from "../model/cliente.model";
import {Router} from "@angular/router";
import {ClienteService} from "../service/cliente.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[];

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes()
      .subscribe( data => {
        this.clientes = data;
      });
  }

  addCliente(): void {
    this.router.navigate(['add-cliente']);
  };

}
