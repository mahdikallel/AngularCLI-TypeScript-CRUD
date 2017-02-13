import {Component, OnInit, EventEmitter} from '@angular/core';
import {TranslateService, LangChangeEvent} from "ng2-translate";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-traduction',
  templateUrl: './traduction.component.html',
  styleUrls: ['./traduction.component.css']
})
export class TraductionComponent implements OnInit {

  param = {value: 'bonjour'};
  private path;
  private translateTo: string;
  private hrefTo: string;
  public onLangChange: EventEmitter<LangChangeEvent> = new EventEmitter<LangChangeEvent>();

  constructor(private translate: TranslateService, private route: ActivatedRoute) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //  translate.use('fr');
    //dfe


  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.path = params['lang'];
      if (this.path == "fr") {
        this.translateTo = "EN";
        this.translate.use('fr');
        this.hrefTo = "/translate/en";
      } else {
        console.log("change to en current" + this.translate.currentLang);
        this.translateTo = "FR";
        this.translate.use('en');
        this.hrefTo = "/translate/fr";
      }
    });


  }




}
