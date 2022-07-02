import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IMateria } from '../shared/interfaces/materia';
import { DataService } from '../../../providers/service/data-service';
import { ResponseGet } from '../shared/interfaces/response-gets';

@Component({
  selector: 'app-materias-page',
  templateUrl: 'materias.page.html',
  styleUrls: ['materias.page.scss']
})
export class MateriasPage {

  materias: Array<IMateria>;

  constructor(private navCtrl: NavController, private service: DataService) { }


  ngOnInit() {
    this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    this.service.getMateria('materias').subscribe((response) => {
      console.log(response)
      this.materias = response;
    });
  }


  doRefresh(event) {
    setTimeout(() => {
      this.ionViewDidLoad();
      event.target.complete();
    }, 2000);
  }

  temaClaro() {
    if (document.body.getAttribute('color-theme') == 'light') {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  }

  irDetalhes(materia: IMateria) {
    console.log(materia)
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
