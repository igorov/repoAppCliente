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

  cliente: Cliente[];

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes()
      .subscribe( data => {
        this.cliente = data;
      });
  }

  deleteUser(cliente: Cliente): void {
  };

  editUser(cliente: Cliente): void {
  };

  addUser(): void {
    this.router.navigate(['add-cliente']);
  };

}
