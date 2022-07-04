import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TarefasDetalhesComponent } from './tarefas/tarefas-detalhes/tarefas-detalhes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./abas/abas.module').then(m => m.AbasPageModule)
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
