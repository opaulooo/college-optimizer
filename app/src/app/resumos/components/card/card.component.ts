/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';
import { IResumo } from 'src/app/shared/interfaces/resumo';

@Component({
  selector: 'app-resumo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() resumo: IResumo;
  @Input() materia: any;

  textoExibicao: string;
  materiaExibicao: string;
  tituloExibicao: string;

  constructor() { }

  ngOnInit() {
    console.log(this.resumo)
    console.log(this.materia)

    this.calculaPreview();
  }

  calculaPreview() {

    let materiaIndex = this.materia.findIndex((element) => {
      return element.key == this.resumo.materia
    })

    if (this.resumo.resumo.length < 200) {
      this.textoExibicao = this.resumo.resumo;
    } else {
      this.textoExibicao = this.resumo.resumo.substring(0, 200) + '...';
    }

    if (this.resumo.titulo.length <= 45) {
      this.tituloExibicao = this.resumo.titulo;
    } else {
      this.tituloExibicao = this.resumo.titulo.substring(0, 31) + '...';
    }
    if (materiaIndex != -1) {
      console.log(this.materia, this.materia[materiaIndex].value)
      if (this.materia[materiaIndex].value.length <= 45) {
        this.materiaExibicao = this.materia[materiaIndex].value;
      } else {
        this.materiaExibicao = this.materia[materiaIndex].value.substring(0, 31) + '...';
      }
    }else{
      this.materiaExibicao = 'Matéria não cadastrada!'.toLocaleUpperCase()
    }
  }
}
