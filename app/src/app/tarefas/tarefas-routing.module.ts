import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasDetalhesComponent } from './tarefas-detalhes/tarefas-detalhes.component';
import { TarefasPage } from './tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasPage,
  },
  {
    path: 'novo',
    component: TarefasDetalhesComponent,
    data: {
      editar: false
    }
  },
  {
    path: 'editar',
    component: TarefasDetalhesComponent,
    data: {
      editar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasPageRoutingModule {}
