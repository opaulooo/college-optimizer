import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrequenciaPage } from './frequencia.page';
import { FrequenciaDetalhesComponent } from './tarefas-detalhes/frequencia-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaPage,
  },
  {
    path: 'editar',
    component: FrequenciaDetalhesComponent,
    data: {
      editar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequenciaPageRoutingModule { }
