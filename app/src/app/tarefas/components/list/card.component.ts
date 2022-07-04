import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ITarefa } from 'src/app/shared/interfaces/tarefa';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() tarefa: ITarefa;
  @Input() materias: any;

  materia;
  constructor() { }

  ngOnInit() {
    // console.log(this.materias)
    // console.log(this.tarefa)
    this.materia = this.materias.findIndex((element) => {
      return this.tarefa.materia == element.key
    })
    // console.log(this.materia)
  }


}
