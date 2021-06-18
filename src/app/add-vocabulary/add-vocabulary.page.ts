import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../shared/classes/book';
import { BookService } from '../shared/services/books.service';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.page.html',
  styleUrls: ['./add-vocabulary.page.scss'],
})
export class AddVocabularyPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
  ) { }

    public listBooks: Book[];

    public newVocabForm = this.fb.group({
      
    });

  ngOnInit() {
      this.bookService.getAllBooks().subscribe(data => { this.listBooks = data});
  }

  public addNewVocab(){
    console.log();
  }

}
