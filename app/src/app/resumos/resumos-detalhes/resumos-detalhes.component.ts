import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    titulo: new FormControl('', Validators.required),
    breveDescricao: new FormControl('', Validators.required),
    resumo: new FormControl(''),
    dataCriacao: new FormControl(new Date()),
    dataUltimaAtualizacao: new FormControl(new Date()),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  });

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) {
    this.resumo = this.router.getCurrentNavigation().extras.state as IResumo;
    this.route.data.subscribe(res => {
      this.editar = res.editar;
    });

    console.log(this.resumo, this.editar);
  }

  ngOnInit() {
    if (!this.resumo && this.editar) {
      this.navCtrl.navigateRoot('/abas/resumos');
    }

    if (this.editar){
      this.createEditarForm();
    } else {
      this.createNovoForm();
    }
  }

  createNovoForm(){
    this.resumoForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      breveDescricao: new FormControl('', Validators.required),
      resumo: new FormControl(''),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    });
  }

  createEditarForm(){
    this.resumoForm = new FormGroup({
      titulo: new FormControl(this.resumo.titulo, Validators.required),
      breveDescricao: new FormControl(this.resumo.breveDescricao, Validators.required),
      resumo: new FormControl(this.resumo.resumo),
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
