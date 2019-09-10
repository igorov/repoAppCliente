import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteService} from "../service/cliente.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private clienteService: ClienteService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  onSubmit() {
    this.clienteService.createCliente(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }


}
