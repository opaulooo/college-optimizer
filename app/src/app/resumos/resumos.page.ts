/* eslint-disable max-len */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { IResumo } from '../shared/interfaces/resumo';

@Component({
  selector: 'app-resumos',
  templateUrl: 'resumos.page.html',
  styleUrls: ['resumos.page.scss']
})
export class ResumosPage {
  resumos: Array<IResumo> = [];
  materias: Array<any> = [];
  constructor(private navCtrl: NavController, private service: DataService) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    this.service.getResumos().subscribe((response) => {
      this.resumos = response;
    });

    this.service.get('materias-keys').subscribe((response) => {
      // console.log(response);
      this.materias = response;
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewDidLoad();
      event.target.complete();
    }, 2000);
  }


  callback() {
    return new Promise((resolve, reject) => {
      this.ngOnInit();
      resolve(null);
    })
  }

  irDetalhes(resumo: IResumo) {
    this.navCtrl.navigateForward('/abas/resumos/editar', {
      state: { resumo: resumo, materiasList: this.materias, callback: this.callback() },
    });
  }

  irAdicionar() {
    this.navCtrl.navigateForward('/abas/resumos/novo', {
      state: { resumo: null, materiasList: this.materias, callback: this.callback() },
    })
  }
}
