import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/classes/book';
import { BookService } from '../shared/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getData();
  }

  public fakeBooks: Book[];

  public goToBookDetails(book: Book) {
    this.bookService.setDetailledBook(book);
    this.router.navigate(['details'], { relativeTo: this.activatedRoute });
  }

  public searchBooks(event) {
    let regExp = new RegExp(event.detail.value, 'gim');
    this.bookService.getAllBooks().subscribe( data => {
      this.fakeBooks = data.filter(x => x.title.match(regExp));
    })
  }

  private getData(){
    this.bookService.getAllBooks().subscribe( data => this.fakeBooks = data)
  }

}
