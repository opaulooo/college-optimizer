import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { ITarefa } from '../shared/interfaces/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss']
})
export class TarefasPage {

  tarefas: Array<ITarefa> = [];
  materias: Array<any> = [];

  constructor(private navControl: NavController, private service: DataService) { }

  async ngOnInit() {

    await this.service.get('materias-keys').subscribe((response) => {
      // console.log(response);
      this.materias = response;
    })

    this.service.getTarefas().subscribe((response) => {
      this.tarefas = response;
    });
    // console.log(this.tarefas)
  }




  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  irAdicionar() {
    this.navControl.navigateForward('/abas/tarefas/novo', {
      state: { materiasList: this.materias },
    }).then(() => {
      this.ngOnInit();
    });
  }

  irDetalhes(materia: ITarefa) {
    this.navControl.navigateForward('/abas/tarefas/editar', {
      state: { materia: materia, materiasList: this.materias },
    }).then(() => {
      this.ngOnInit();
    });
  }

}
