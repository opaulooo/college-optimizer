import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { Periodos } from 'src/app/shared/data/periodo';
import { ITarefa } from 'src/app/shared/interfaces/tarefa';

@Component({
  selector: 'app-tarefas-detalhes',
  templateUrl: './tarefas-detalhes.component.html',
  styleUrls: ['./tarefas-detalhes.component.scss'],
})
export class TarefasDetalhesComponent implements OnInit {
  editar = false;
  tarefa: ITarefa;
  materias: Array<any> = [];

  tarefaForm: FormGroup = new FormGroup({
    ID: new FormControl(null, Validators.required),
    titulo: new FormControl(null, Validators.required),
    materia: new FormControl(null, Validators.required),
    descricao: new FormControl(null, Validators.required),
    dataInicio: new FormControl(null, Validators.required),
    dataFim: new FormControl(null, Validators.required),
    notificar: new FormControl(null),
    concluido: new FormControl(null),
    dataCriacao: new FormControl(null),
    dataUltimaAtualizacao: new FormControl(null),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  });

  constructor(private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private service: DataService) {
    // console.log(this.router.getCurrentNavigation().extras.state)
    this.materias = this.router.getCurrentNavigation().extras.state.materiasList;
    this.tarefa = this.router.getCurrentNavigation().extras.state.materia as ITarefa;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  async ngOnInit() {
    // console.log(this.materias, this.tarefa, this.editar, this.tarefaForm.value.notificar);

    if (!this.tarefa && this.editar) {
      this.navCtrl.navigateRoot('/abas/tarefas');
    }

    if (this.editar) {
      this.createEditarForm();
      console.log(this.tarefaForm.value);
    } else {
      this.createNovoForm();
      console.log(this.tarefaForm.value);
    }
  }

  createNovoForm() {
    this.tarefaForm = new FormGroup({
      ID: new FormControl(null, Validators.required),
      titulo: new FormControl('', Validators.required),
      materia: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      dataInicio: new FormControl(null, Validators.required),
      dataFim: new FormControl(null, Validators.required),
      notificar: new FormControl(false),
      concluido: new FormControl(false),
      dataCriacao: new FormControl(null),
      dataUltimaAtualizacao: new FormControl(null),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  createEditarForm() {
    this.tarefaForm = new FormGroup({
      ID: new FormControl(this.tarefa.ID, Validators.required),
      titulo: new FormControl(this.tarefa.titulo, Validators.required),
      materia: new FormControl(this.tarefa.materia, Validators.required),
      descricao: new FormControl(this.tarefa.descricao, Validators.required),
      dataInicio: new FormControl(this.tarefa.dataInicio, Validators.required),
      dataFim: new FormControl(this.tarefa.dataFim, Validators.required),
      notificar: new FormControl(this.tarefa.notificar, Validators.required),
      concluido: new FormControl(this.tarefa.concluido, Validators.required),
      dataCriacao: new FormControl(this.tarefa.dataCriacao, Validators.required),
      dataUltimaAtualizacao: new FormControl(this.tarefa.dataUltimaAtualizacao, Validators.required),
      dataDeletado: new FormControl(this.tarefa.dataDeletado),
      deletado: new FormControl(false)
    });
  }


  async novaTarefa(addTarefa: ITarefa) {

    console.log(addTarefa)

    if (
      addTarefa.titulo != null && addTarefa.titulo != '' &&
      addTarefa.materia != null && addTarefa.materia != '' &&
      addTarefa.descricao != null && addTarefa.descricao != '' &&
      addTarefa.dataInicio != null && addTarefa.dataInicio.toString() != '' &&
      addTarefa.dataFim != null && addTarefa.dataFim.toString() != '' &&
      addTarefa.notificar != null &&
      addTarefa.concluido != null
    ) {
      this.service.postTarefa(addTarefa).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }
  }

  async atualizaTarefa(updateTarefa: ITarefa) {

    if (
      updateTarefa.titulo != null && updateTarefa.titulo != '' &&
      updateTarefa.descricao != null && updateTarefa.descricao != '' &&
      updateTarefa.dataInicio != null &&
      updateTarefa.dataFim != null &&
      updateTarefa.notificar != null
    ) {
      this.service.putTarefa(updateTarefa).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }
  }

  async deletaTarefa(id: number) {
    // console.log(id)
    this.service.delete('tarefas', id).subscribe((response) => {
      console.log(response)
    });
    this.voltar();

  }

  async confirmarAlert(data: ITarefa, metodo: String, edicao: boolean) {
    // console.log(data)
    const alert = await this.alertController.create({
      header: `Atenção!`,
      message: `Confirmar ${metodo}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => { edicao ? this.deletaTarefa(data.ID) : this.atualizaTarefa(data) }
        }
      ]
    });
    await alert.present();
  }

  async presentAlert(header: String, subHeader: String, message: String) {
    const alert = await this.alertController.create({
      header: `${header}`,
      subHeader: `${subHeader}`,
      message: `${message}`,
      buttons: ['Ok']
    });

    await alert.present();
  }

  voltar() {
    this.navCtrl.pop();
  }

}
