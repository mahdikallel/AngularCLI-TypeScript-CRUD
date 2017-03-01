import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
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
import { TraductionComponent } from './traduction/traduction.component';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
// import {MdButtonModule} from "@angular2-material/button"
// import {MdCardModule} from '@angular2-material/card';
// import {MdToolbarModule} from '@angular2-material/toolbar';
import { MaterialModule } from '@angular/material';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// import { MaterialButton } from '@angular/material/button';
import {} from 'hammerjs'


const routes: Routes = [
  { path: 'todo/:status', component: TodoComponent },
  { path: 'design', component:DesignComponent },
  { path: 'translate/:lang', component:TraductionComponent },
  { path: 'api/book', component:BookComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DesignComponent,
    PageNotFoundComponentComponent,
    TraductionComponent,
    BookComponent,
    ContactComponent

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
    PopoverModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    // MdButtonModule.forRoot(),
    // MdCardModule.forRoot(),
    // MdToolbarModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
