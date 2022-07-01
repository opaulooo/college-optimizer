import { Component, Input, OnInit } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';

@Component({
  selector: 'app-materia-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() materia: IMateria;

  constructor() { }

  ngOnInit() {}

}
