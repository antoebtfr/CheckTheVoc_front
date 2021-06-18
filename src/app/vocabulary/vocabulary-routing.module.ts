import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyPage } from './vocabulary.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyPage
  }, 
  {
    path: 'details',
    loadChildren: () => import('../vocab-details/vocab-details.module').then( m => m.VocabDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocabularyPageRoutingModule {}
