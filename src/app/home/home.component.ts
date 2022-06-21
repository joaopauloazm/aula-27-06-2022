import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf: string = '';

  constructor() {}

  ngOnInit(): void {}

  validar(): void {
    const valor = this.cpf;

    this.cpf = 'Inválido.';
  }
}
