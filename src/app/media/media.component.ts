import { Component } from '@angular/core';
import { Aluno } from './aluno.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  imports: [FormsModule, CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  aluno: Aluno = {
    nome: '',
    notaP1: 0,
    notaP2: 0,
    media: 0,
    situacao: ''
  }

  calcularMedia() {
    this.aluno.media = (this.aluno.notaP1 + this.aluno.notaP2) / 2
    if (this.aluno.media > 5) {
      this.aluno.situacao = 'Aprovado'
    } else {
      this.aluno.situacao = 'Reprovado'
    }
  }
}
