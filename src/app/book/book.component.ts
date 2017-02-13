import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent  {

  books : Book[];

  constructor(private  bookService: BookService) {
    this.bookService.getAllBooks().subscribe(books =>{
      this.books = books;
      console.log("this.books  *****  "+this.books[0].author);
    });

    console.log("BookComponent constructor");
  }



}

interface Book {
  id: string;
  title: string;
  author: string;

}
