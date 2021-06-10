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

  public menuButtonsTo = [
    {title: 'Livres', logo: undefined, link: 'books'},
    {title: 'Vocabulaires', logo: undefined, link: 'vocabulary'}
  ];

}
