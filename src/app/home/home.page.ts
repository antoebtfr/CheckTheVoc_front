import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public menuShortCuts = [
    {title: 'Jouer une partie', logo: 'game-controller-outline', link: ''},
    {title: 'Quizz aélatoire', logo: 'dice-outline', link: ''},
  ];

  public menuLinksTo = [
    {title: 'Livres', logo: undefined, link: ''},
    {title: 'Vocabualaires', logo: undefined, link: ''}
  ];

}
