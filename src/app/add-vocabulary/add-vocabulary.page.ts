import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.page.html',
  styleUrls: ['./add-vocabulary.page.scss'],
})
export class AddVocabularyPage implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

    public newVocabForm = this.fb.group({
      
    });

  ngOnInit() {
  }

  public addNewVocab(){
    console.log();
  }

}
