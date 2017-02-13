import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class BookService {

  constructor(private http: Http) {
    console.log("book service initiazeld...");
  }

  getAllBooks(){
    //https://jsonplaceholder.typicode.com/users
    return this.http.get('http://localhost:3000/api/v1/books').map(res => res.json());
  }




}
