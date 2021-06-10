import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/classes/book';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  constructor(
    private bookService: BooksService,
  ) { }

  public detailledBook: Book;

  ngOnInit() {
    this.detailledBook = this.bookService.getCurrentDetailledBook();
  }



}
