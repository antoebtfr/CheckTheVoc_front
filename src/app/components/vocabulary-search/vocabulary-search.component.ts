import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public allVocabs: Vocabulary[];
  public lastVocabs: Vocabulary[];
  public searchbarIsEmpty = true;

  ngOnInit() {
    this.vocabService.getAll().subscribe(data => { this.lastVocabs = data.slice(0, 9) });
  }

  private searchVocabs(event): void {
    let regExp = new RegExp(event.detail.value, 'gim');
    this.vocabService.getAll().subscribe(data => {
      this.allVocabs = data.filter(x => x.name.match(regExp));
    })
  }

  public searchbarValueChange(event): void {
    this.searchbarIsEmpty = event.detail.value.length > 0 ? false : true;
    this.searchVocabs(event);
  }

  public goToDetails(vocabulary) {
    this.vocabService.setDetails(vocabulary);
    this.router.navigate(['details'], {relativeTo: this.activatedRoute});
  }


}
