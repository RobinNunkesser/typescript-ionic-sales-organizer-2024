import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedTasksPageRoutingModule } from './selected-tasks-routing.module';

import { SelectedTasksPage } from './selected-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedTasksPageRoutingModule
  ],
  declarations: [SelectedTasksPage]
})
export class SelectedTasksPageModule {}
