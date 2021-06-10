import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  public detailledBook: Book;

  ngOnInit() {
    this.detailledBook = this.bookService.getCurrentDetailledBook();
    this.noDetailledBookChecker();
  }

  private noDetailledBookChecker(){ // Assure qu'un livre a bien été chargé 
      if(!this.detailledBook.title){
        this.router.navigate(['books']);
      }
  }



}
