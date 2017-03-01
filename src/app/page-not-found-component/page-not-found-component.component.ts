import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {BookComponent} from "../book/book.component";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {
  myState = 'AZ';
  states = [{code: 'AL', name: 'Alabama'}];

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(TodoComponent);
  }



  ngOnInit() {
  }

}
