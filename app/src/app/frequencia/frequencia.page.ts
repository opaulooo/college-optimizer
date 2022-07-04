import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'providers/service/data-service';
import { IMateria } from '../shared/interfaces/materia';

@Component({
  selector: 'app-frequencia',
  templateUrl: 'frequencia.page.html',
  styleUrls: ['frequencia.page.scss']
})
export class FrequenciaPage {

  materias: Array<IMateria> = [];

  constructor(private navCtrl: NavController, private service: DataService) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    this.service.getMateria().subscribe((response) => {
      this.materias = response;
    });
    console.log(this.materias)
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewDidLoad();
      event.target.complete();
    }, 2000);
  }

  irDetalhes(materia: IMateria) {
    this.navCtrl.navigateForward('/abas/frequencia/editar', {
      state: { materias: materia }
    }).then(() => {
      this.ionViewDidLoad();
    });

  }
}
