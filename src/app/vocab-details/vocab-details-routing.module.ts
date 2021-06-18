import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabDetailsPage } from './vocab-details.page';

const routes: Routes = [
  {
    path: '',
    component: VocabDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocabDetailsPageRoutingModule {}
