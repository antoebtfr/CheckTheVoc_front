import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.page.html',
  styleUrls: ['./vocabulary.page.scss'],
})
export class VocabularyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lastWords = [
    'test', 'test2', 'test4'
  ]

  public searchbarIsEmpty = false;

  public searchbarValueChange(event): void{
    this.searchbarIsEmpty = event.detail.value.length > 0 ? false : true; 
  }

}
