import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VocabDetailsPageRoutingModule } from './vocab-details-routing.module';

import { VocabDetailsPage } from './vocab-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VocabDetailsPageRoutingModule
  ],
  declarations: [VocabDetailsPage]
})
export class VocabDetailsPageModule {}
