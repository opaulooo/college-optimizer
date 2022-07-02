import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { IResumo } from 'src/app/shared/interfaces/resumo';

@Component({
  selector: 'app-resumos-detalhes',
  templateUrl: './resumos-detalhes.component.html',
  styleUrls: ['./resumos-detalhes.component.scss'],
})
export class ResumosDetalhesComponent implements OnInit {
  editar = false;
  resumo: IResumo;

  resumoForm: FormGroup = new FormGroup({
    ID: new FormControl(null, Validators.required),
    titulo: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required),
    breveDescricao: new FormControl('', Validators.required),
    resumo: new FormControl(''),
    dataCriacao: new FormControl(new Date()),
    dataUltimaAtualizacao: new FormControl(new Date()),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  });

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private service: DataService) {
    this.resumo = this.router.getCurrentNavigation().extras.state as IResumo;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  ngOnInit() {
    if (!this.resumo && this.editar) {
      this.navCtrl.navigateRoot('/abas/resumos');
    }

    if (this.editar) {
      this.createEditarForm();
    } else {
      this.createNovoForm();
    }
  }

  createNovoForm() {
    this.resumoForm = new FormGroup({
      ID: new FormControl(null, Validators.required),
      titulo: new FormControl('', Validators.required),
      materia: new FormControl('', Validators.required),
      breveDescricao: new FormControl('', Validators.required),
      resumo: new FormControl(''),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  createEditarForm() {
    this.resumoForm = new FormGroup({
      ID: new FormControl(this.resumo.ID, Validators.required),
      titulo: new FormControl(this.resumo.titulo, Validators.required),
      materia: new FormControl(this.resumo.materia, Validators.required),
      breveDescricao: new FormControl(this.resumo.breveDescricao, Validators.required),
      resumo: new FormControl(this.resumo.resumo),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  async novaMateria(addResumo: IResumo) {

    if (addResumo.breveDescricao != null && addResumo.breveDescricao != '' &&
      addResumo.resumo != null && addResumo.resumo != '' &&
      addResumo.materia != null && addResumo.materia != '' &&
      addResumo.titulo != null && addResumo.titulo != ''
    ) {
      this.service.postResumo('resumos', addResumo).subscribe((response) => {
        console.log(response)
      });
      this.voltar();
    }
    else {
      this.presentAlert('Erro', '', 'Preencha corretamente todos os campos para prosseguir!')
    }

  }

  async atualizaMateria(updateResumo: IResumo) {

    if (updateResumo.breveDescricao != null && updateResumo.breveDescricao != '' &&
      updateResumo.resumo != null && updateResumo.resumo != '' &&
      updateResumo.materia != null && updateResumo.materia != '' &&
      updateResumo.titulo != null && updateResumo.titulo != ''
    ) {
      this.service.putResumo('resumos', updateResumo).subscribe((response) => {
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
    this.service.delete('resumos', id).subscribe((response) => {
      console.log(response)
    });
    this.voltar();

  }

  async confirmarAlert(data: IResumo, metodo: String, edicao: boolean) {
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
    this.navCtrl.pop();
  }

}
