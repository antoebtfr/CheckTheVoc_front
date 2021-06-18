import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vocabulary } from '../classes/vocabulary';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = '../../assets/fakeDatas/fakeVocabs.json';

  private currentDetailledBook: Vocabulary = {
    id: undefined,
    name: undefined,
    bookId: undefined,
    definition: undefined,
  }

  public setDetailledBook(vocabulary: Vocabulary) {
    this.currentDetailledBook = vocabulary;
  }

  public getCurrentDetailledBook(): Vocabulary {
    return this.currentDetailledBook;
  }

  public getAll(): Observable<Vocabulary[]>{
    return this.http.get<Vocabulary[]>(this.URL);
  }

  public add(data: Vocabulary){
    return this.http.put(this.URL, data);
  }
}
