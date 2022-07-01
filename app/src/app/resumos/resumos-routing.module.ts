import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumosDetalhesComponent } from './resumos-detalhes/resumos-detalhes.component';
import { ResumosPage } from './resumos.page';

const routes: Routes = [
  {
    path: '',
    component: ResumosPage,
  },
  {
    path: 'editar',
    component: ResumosDetalhesComponent,
    data: {
      editar: true
    }
  },
  {
    path: 'novo',
    component: ResumosDetalhesComponent,
    data: {
      editar: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumosPageRoutingModule {}
