import { Injectable } from '@angular/core';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  private currentDetailledBook: Book = {
    id: undefined,
    cover: undefined,
    description: undefined,
    title: undefined,
  }

  public setDetailledBook(book: Book) {
    this.currentDetailledBook = book;
  }

  public getCurrentDetailledBook(): Book {
    return this.currentDetailledBook;
  }
}
