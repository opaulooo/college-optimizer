import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IResumo } from 'src/app/shared/interfaces/resumo';

@Component({
  selector: 'app-resumos-detalhes',
  templateUrl: './resumos-detalhes.component.html',
  styleUrls: ['./resumos-detalhes.component.scss'],
})
export class ResumosDetalhesComponent implements OnInit {
  resumo: IResumo;

  resumoForm: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    breveDescricao: new FormControl('', Validators.required),
    resumo: new FormControl(''),
    dataCriacao: new FormControl(new Date()),
    dataUltimaAtualizacao: new FormControl(new Date()),
    dataDeletado: new FormControl(null),
    deletado: new FormControl(false)
  })
  
  constructor(private router: Router, private navCtrl: NavController) { 
    this.resumo = this.router.getCurrentNavigation().extras.state as IResumo;
    
    if (!this.resumo) {
      this.navCtrl.navigateRoot('/abas');
    }  
  }

  ngOnInit() {
    if (this.resumo){
      this.createForm();
    }
  }

  createForm(){
    this.resumoForm = new FormGroup({
      titulo: new FormControl(this.resumo.titulo, Validators.required),
      breveDescricao: new FormControl(this.resumo.breveDescricao, Validators.required),
      resumo: new FormControl(this.resumo.resumo),
      dataCriacao: new FormControl(new Date()),
      dataUltimaAtualizacao: new FormControl(new Date()),
      dataDeletado: new FormControl(null),
      deletado: new FormControl(false)
    })
  }

  voltar() {
    this.navCtrl.pop();
  }

}
