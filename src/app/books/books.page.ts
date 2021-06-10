import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fakeBooks = [
    {title: 'test1', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-creative-ideas-book-cover-design-template-52f7ec58f53452b9b46a351cea1bd9a1_screen.jpg?ts=1568463645'},
    {title: 'test10', cover: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'},
  ];

}
