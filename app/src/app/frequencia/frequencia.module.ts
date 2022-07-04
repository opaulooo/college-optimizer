import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrequenciaPage } from './frequencia.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FrequenciaPageRoutingModule } from './frequencia-routing.module';
import { FrequenciaDetalhesComponent } from './tarefas-detalhes/frequencia-detalhes.component';
import { FrequenciaComponent } from './components/list/card.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: FrequenciaPage }]),
    FrequenciaPageRoutingModule,
  ],
  declarations: [FrequenciaPage, FrequenciaComponent, FrequenciaDetalhesComponent]
})
export class FrequenciaPageModule {}
