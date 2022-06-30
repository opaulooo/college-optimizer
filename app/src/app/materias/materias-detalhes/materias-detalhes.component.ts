import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IMateria } from 'src/app/shared/interfaces/materia';

@Component({
  selector: 'app-materias-detalhes',
  templateUrl: './materias-detalhes.component.html',
  styleUrls: ['./materias-detalhes.component.scss'],
})
export class MateriasDetalhesComponent implements OnInit {
  editar = false;
  materia: IMateria;

  materiaForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    periodo: new FormControl(''),
    dataCriacao: new FormControl(new Date()),
    dataUltimaAtualizacao: new FormControl(new Date()),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  });
  periodos = [
    '1º período',
    '2º período',
    '3º período',
    '4º período',
    '5º período',
    '6º período',
    '7º período',
    '8º período',
    '9º período',
    '10º período',
  ];

  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
    this.materia = this.router.getCurrentNavigation().extras.state as IMateria;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  ngOnInit() {
    if (!this.materia && this.editar) {
      this.navCtrl.navigateRoot('/abas/materias');
    }

    if (this.editar){
      this.createEditarForm();
    } else {
      this.createNovoForm();
    }
  }

  createNovoForm(){
    this.materiaForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      periodo: new FormControl('', Validators.required),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  createEditarForm(){
    this.materiaForm = new FormGroup({
      nome: new FormControl(this.materia.nome, Validators.required),
      descricao: new FormControl(this.materia.descricao, Validators.required),
      periodo: new FormControl(this.materia.periodo),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  voltar() {
    this.navCtrl.pop();
  }

}
