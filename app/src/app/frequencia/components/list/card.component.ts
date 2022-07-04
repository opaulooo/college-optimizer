import { Component, Input, OnInit } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';

@Component({
  selector: 'app-frequencia-list',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class FrequenciaComponent implements OnInit {
  @Input() materia: IMateria;

  media;

  constructor() { }

  ngOnInit() {
    this.media = (100 - (this.materia.quantidadefaltas / this.materia.quantidadeaulas) * 100).toFixed(2);
  }

}
