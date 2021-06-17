import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVocabularyPageRoutingModule } from './add-vocabulary-routing.module';

import { AddVocabularyPage } from './add-vocabulary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVocabularyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddVocabularyPage]
})
export class AddVocabularyPageModule {}
