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

  public testArray = [
    'test', 'test2', 'test4'
  ]

}
