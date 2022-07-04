import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbasPage } from './abas.page';

const routes: Routes = [
  {
    path: 'abas',
    component: AbasPage,
    children: [
      {
        path: 'materias',
        loadChildren: () => import('../materias/materias.module').then(m => m.MateriasPageModule)
      },
      {
        path: 'tarefas',
        loadChildren: () => import('../tarefas/tarefas.module').then(m => m.TarefasPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioPageModule)
      },
      {
        path: 'frequencia',
        loadChildren: () => import('../frequencia/frequencia.module').then(m => m.FrequenciaPageModule)
      },
      {
        path: 'resumos',
        loadChildren: () => import('../resumos/resumos.module').then(m => m.ResumosPageModule)
      },
      {
        path: '',
        redirectTo: '/abas/materias',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/abas/materias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AbasPageRoutingModule { }
