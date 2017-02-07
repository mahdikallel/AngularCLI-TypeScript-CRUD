import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlertModule, ModalDirective} from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {Routes, RouterModule} from "@angular/router";
import { DesignComponent } from './design/design.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



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
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
