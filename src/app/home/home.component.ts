import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  validar(): void {
    const valor = this.cpf;

    this.cpf = 'Inválido.';
  }
}
