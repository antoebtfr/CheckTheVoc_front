import { Component, OnInit } from '@angular/core';
import { Vocabulary } from 'src/app/shared/classes/vocabulary';
import { VocabularyService } from 'src/app/shared/services/vocabulary.service';

@Component({
  selector: 'app-vocabulary-search',
  templateUrl: './vocabulary-search.component.html',
  styleUrls: ['./vocabulary-search.component.scss'],
})
export class VocabularySearchComponent implements OnInit {

  constructor(
    private vocabService: VocabularyService,
  ) { }
  
  public allVocabs: Vocabulary[];
  public lastWords: Vocabulary[];
  public searchbarIsEmpty = true;
  
  ngOnInit() {
    this.vocabService.getAll().subscribe(data => { this.allVocabs = data});
    this.vocabService.getAll().subscribe(data => { this.lastWords = data.slice(0, 9)});
  }

  public searchVocabs(event) {
    let regExp = new RegExp(event.detail.value, 'gim');
    this.vocabService.getAll().subscribe( data => {
      this.allVocabs = data.filter(x => x.name.match(regExp));
    })
  }

  public searchbarValueChange(event): void{
    this.searchbarIsEmpty = event.detail.value.length > 0 ? false : true; 
  }


}
