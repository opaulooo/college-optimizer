import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IMateria } from '../shared/interfaces/materia';
import { DataService } from '../../../providers/service/data-service';

@Component({
  selector: 'app-materias-page',
  templateUrl: 'materias.page.html',
  styleUrls: ['materias.page.scss']
})
export class MateriasPage {

  materias: Array<IMateria> = [];

  constructor(private navCtrl: NavController, private service: DataService) { }


  ngOnInit() {
    this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    this.service.getMaterias('materias').subscribe((response) => {
      this.materias = response;
    });
  }


  doRefresh(event) {
    setTimeout(() => {
      this.ionViewDidLoad();
      event.target.complete();
    }, 2000);
  }

  irDetalhes(materia: IMateria) {
    this.navCtrl.navigateForward('/abas/materias/editar', {
      state: materia
    }).then(() => {
      this.ionViewDidLoad();
    });

  }

  irAdicionar() {
    this.navCtrl.navigateForward('/abas/materias/novo').then(() => {
      this.ionViewDidLoad();
    });
  }

}
