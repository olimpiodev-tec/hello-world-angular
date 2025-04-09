import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { Cep } from './cep.model';

@Component({
  selector: 'app-cep',
  imports: [],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  informacoesCep: Cep = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }

  constructor(
    private cepService: CepService
  ) {}

  buscarCep(cep: string) {
    this.cepService.buscar(cep)
      .subscribe(
        {
          next: (dados) => this.informacoesCep = dados,
          error: () => alert('Erro ao buscar dados')
        }
      )
  }
}
