import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedTasksPage } from './selected-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedTasksPageRoutingModule {}
