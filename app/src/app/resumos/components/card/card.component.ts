/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { IResumo } from 'src/app/shared/interfaces/resumo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('resumo') resumo: IResumo;

  textoExibicao: string;
  tituloExibicao: string;

  constructor() { }

  ngOnInit() {
    this.calculaPreview();
  }

  calculaPreview(){
    if(this.resumo.resumo.length < 200){ 
      this.textoExibicao = this.resumo.resumo;
    } else{
      this.textoExibicao = this.resumo.resumo.substring(0, 200) + '...';
    } 

    if(this.resumo.titulo.length <= 45){ 
      this.tituloExibicao = this.resumo.titulo;
    } else {
      this.tituloExibicao = this.resumo.titulo.substring(0, 31) + '...';
    }
  }
}
