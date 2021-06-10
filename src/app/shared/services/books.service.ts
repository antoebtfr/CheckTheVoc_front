import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = '../../assets/fakeDatas/fakebooks.json';

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

  public getAllBooks(): Observable<Book[]>{
     return this.http.get<Book[]>(this.URL);
  }
}
