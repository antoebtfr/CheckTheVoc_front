import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVocabularyPage } from './add-vocabulary.page';

const routes: Routes = [
  {
    path: '',
    component: AddVocabularyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVocabularyPageRoutingModule {}
