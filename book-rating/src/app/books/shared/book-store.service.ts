import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  create(book: Book): Observable<string> {
    return this.http.post(`${this.api}/book`, book, { responseType: 'text' });
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${term}`);
  }


}
