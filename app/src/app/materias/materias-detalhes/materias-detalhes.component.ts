import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { Periodos } from 'src/app/shared/data/periodo';
import { IMateria } from 'src/app/shared/interfaces/materia';

@Component({
  selector: 'app-materias-detalhes',
  templateUrl: './materias-detalhes.component.html',
  styleUrls: ['./materias-detalhes.component.scss'],
})
export class MateriasDetalhesComponent implements OnInit {
  editar = false;
  materia: IMateria;
  periodos = Periodos;

  materiaForm: FormGroup = new FormGroup({
    ID: new FormControl(null, Validators.required),
    materia: new FormControl(null, Validators.required),
    descricao: new FormControl(null, Validators.required),
    periodo: new FormControl(null),
    dataCriacao: new FormControl(new Date()),
    dataUltimaAtualizacao: new FormControl(new Date()),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  });

  constructor(private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private service: DataService) {
    this.materia = this.router.getCurrentNavigation().extras.state as IMateria;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  ngOnInit() {
    console.log(this.materia, this.editar);
    if (!this.materia && this.editar) {
      this.navCtrl.navigateRoot('/abas/materias');
    }

    if (this.editar) {
      this.createEditarForm();
      console.log(this.materiaForm.value);
    } else {
      this.createNovoForm();
      console.log(this.materiaForm.value);
    }
  }

  createNovoForm() {
    this.materiaForm = new FormGroup({
      ID: new FormControl(null),
      materia: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      periodo: new FormControl('', Validators.required),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  createEditarForm() {
    this.materiaForm = new FormGroup({
      ID: new FormControl(this.materia.ID, Validators.required),
      materia: new FormControl(this.materia.materia, Validators.required),
      descricao: new FormControl(this.materia.descricao, Validators.required),
      periodo: new FormControl(this.materia.periodo),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  async novaMateria(addMateria: IMateria) {

    if (addMateria.materia != null && addMateria.materia != '' &&
      addMateria.periodo != null &&
      addMateria.descricao != null && addMateria.descricao != ''
    ) {
      this.service.postMateria('materias', addMateria).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }

  }

  async atualizaMateria(updateMateria: IMateria) {

    if (updateMateria.materia != null && updateMateria.materia != '' &&
      updateMateria.periodo != null &&
      updateMateria.descricao != null && updateMateria.descricao != ''
    ) {
      this.service.putMateria('materias', updateMateria).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }
  }

  async deletaMateria(id: number) {
    console.log(id)
    this.service.delete('materias', id).subscribe((response) => {
      console.log(response)
    });
    this.voltar();

  }

  async confirmarAlert(data: IMateria, metodo: String, edicao: boolean) {
    console.log(data)
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
          handler: () => { edicao ? this.deletaMateria(data.ID) : this.atualizaMateria(data) }
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
    console.log('voltar')
    console.log(this.navCtrl.pop())
    this.navCtrl.pop();
  }

}
