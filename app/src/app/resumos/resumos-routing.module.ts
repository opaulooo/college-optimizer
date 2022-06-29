import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumosPage } from './resumos.page';

const routes: Routes = [
  {
    path: '',
    component: ResumosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumosPageRoutingModule {}
