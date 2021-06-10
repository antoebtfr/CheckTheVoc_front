import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/classes/book';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  constructor(
    private router: Router,
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public fakeBooks: Book[] = [
    { title: 'test1', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-creative-ideas-book-cover-design-template-52f7ec58f53452b9b46a351cea1bd9a1_screen.jpg?ts=1568463645' },
    { title: 'test10', cover: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' },
  ];


  public goToBookDetails(book: Book) {
    this.booksService.setDetailledBook(book);
    this.router.navigate(['details'], { relativeTo: this.activatedRoute });
  }

  public searchBooks(event) {
    let regExp = new RegExp(event.detail.value, 'gi');
    this.fakeBooks = this.fakeBooks.filter(x => !x.title.search(regExp));
  }

}
