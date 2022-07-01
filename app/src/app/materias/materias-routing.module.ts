import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasDetalhesComponent } from './materias-detalhes/materias-detalhes.component';
import { MateriasPage } from './materias.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasPage,
  },
  {
    path: 'novo',
    component: MateriasDetalhesComponent,
    data: {
      editar: false
    }
  },
  {
    path: 'editar',
    component: MateriasDetalhesComponent,
    data: {
      editar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasPagePageRoutingModule {}
