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
    { id: 1, nome: '1º período' },
    { id: 2, nome: '2º período' },
    { id: 3, nome: '3º período' },
    { id: 4, nome: '4º período' },
    { id: 5, nome: '5º período' },
    { id: 6, nome: '6º período' },
    { id: 7, nome: '7º período' },
  ];

  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
    this.materia = this.router.getCurrentNavigation().extras.state as IMateria;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });
  }

  ngOnInit() {}

  createNovoForm(){
    this.materiaForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      periodo: new FormControl(''),
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
