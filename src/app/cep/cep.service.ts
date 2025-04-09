import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private apiUrl = 'https://viacep.com.br/ws';

  constructor(
    private http: HttpClient
  ) { }

  buscar(cep: string) {
    return this.http.get<Cep>(`${this.apiUrl}/${cep}/json/`); 
  }
}
