import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  imports: [CommonModule],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.css'
})
export class MensagemComponent {
  mensagemAtual = 0

  mostrarMensagem(identificador: number) {
    this.mensagemAtual = identificador
  }

}
