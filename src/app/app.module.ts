import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlertModule, PopoverModule} from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {Routes, RouterModule} from "@angular/router";
import { DesignComponent } from './design/design.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CarouselModule } from 'ng2-bootstrap/carousel';



const routes: Routes = [
  { path: 'todo/:status', component: TodoComponent },
  { path: 'design', component:DesignComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DesignComponent,
    PageNotFoundComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
