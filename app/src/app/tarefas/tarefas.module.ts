import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefasPage } from './tarefas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TarefasPageRoutingModule } from './tarefas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TarefasPageRoutingModule
  ],
  declarations: [TarefasPage]
})
export class TarefasPageModule {}
