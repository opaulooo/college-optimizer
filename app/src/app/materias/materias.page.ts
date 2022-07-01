import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IMateria } from '../shared/interfaces/materia';

@Component({
  selector: 'app-materias-page',
  templateUrl: 'materias.page.html',
  styleUrls: ['materias.page.scss']
})
export class MateriasPage {
  materias: IMateria[] = [
    {
      nome: 'Instrumentação e Controle de Processos',
      descricao: 'Descrição de matérias genérica como exemplo LALALALA',
      periodo: '7º período',
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      nome: 'Instrumentação e Controle de Processos',
      descricao: 'Descrição de matérias genérica como exemplo LALALALA',
      periodo: '7º período',
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      nome: 'Instrumentação e Controle de Processos',
      descricao: 'Descrição de matérias genérica como exemplo LALALALA',
      periodo: '7º período',
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      nome: 'Instrumentação e Controle de Processo AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs',
      descricao: 'Descrição de matérias genérica como exemplo LALALALA',
      periodo: '7º período',
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
  ];

  constructor(private navCtrl: NavController) {}

  irDetalhes(materia: IMateria){
    this.navCtrl.navigateForward('/abas/materias/editar', {
      state: materia
    });
  }

  irAdicionar(){
    this.navCtrl.navigateForward('/abas/materias/novo');
  }

}
