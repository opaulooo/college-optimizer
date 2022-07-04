import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { IMateria } from 'src/app/shared/interfaces/materia';

@Component({
  selector: 'app-frequencia-detalhes',
  templateUrl: './frequencia-detalhes.component.html',
  styleUrls: ['./frequencia-detalhes.component.scss'],
})
export class FrequenciaDetalhesComponent implements OnInit {
  editar = false;
  materias: IMateria;

  frequenciaForm: FormGroup = new FormGroup({
    ID: new FormControl(null, Validators.required),
    materia: new FormControl(null, Validators.required),
    quantidadeaulas: new FormControl(null, Validators.required),
    quantidadefaltas: new FormControl(null, Validators.required),
    descricao: new FormControl(null, Validators.required),
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
    this.materias = this.router.getCurrentNavigation().extras.state.materias;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  async ngOnInit() {
    console.log(this.materias, this.editar, this.frequenciaForm.value.notificar);

    if (!this.materias && this.editar) {
      this.navCtrl.navigateRoot('/abas/frequencias');
    }

    this.createEditarForm();
  }

  createEditarForm() {

    let freq = (((this.materias.quantidadeaulas * 0.25)) - this.materias.quantidadefaltas);


    this.frequenciaForm = new FormGroup({
      ID: new FormControl(this.materias.ID, Validators.required),
      materia: new FormControl(this.materias.materia, Validators.required),
      quantidadeaulas: new FormControl(this.materias.quantidadeaulas, Validators.required),
      quantidadefaltas: new FormControl(this.materias.quantidadefaltas, Validators.required),
      podeFaltar: new FormControl(freq < 0 ? 'Reprovado por falta!' : freq, Validators.required),
      dataCriacao: new FormControl(this.materias.dataCriacao, Validators.required),
      dataUltimaAtualizacao: new FormControl(this.materias.dataUltimaAtualizacao, Validators.required),
      dataDeletado: new FormControl(this.materias.dataDeletado),
      deletado: new FormControl(false)
    });
  }

  async atualizaFrequencia(updateFrequencia: IMateria) {
    console.log(updateFrequencia)
    if (updateFrequencia.quantidadefaltas != null) {
      this.service.putFrequencia(updateFrequencia).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }
  }

  async deletaFrequencia(id: number) {
    // console.log(id)
    this.service.delete('frequencias', id).subscribe((response) => {
      console.log(response)
    });
    this.voltar();

  }

  async confirmarAlert(data: IMateria, metodo: String, edicao: boolean) {
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
          handler: () => { edicao ? this.deletaFrequencia(data.ID) : this.atualizaFrequencia(data) }
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
