import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap/modal';
@Component({
  selector: 'app-design',
  templateUrl: 'design.component.html',
  styleUrls: ['design.component.css']
})
export class DesignComponent implements OnInit {

  public singleModel: string;
  public checkModel:any = {left: false, middle: true, right: false};
  //slide show
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides:boolean = false;


  /* Unit test*/
  @Input()firstName: string;
  @Input()lastName: string;

  a:number;
  b:number;

  public sayHello(){
    console.log("Hello" + this.firstName + " " + this.lastName);
    return "Hello" + this.firstName + " " + this.lastName;
  }

  public calculate(a,b){
    return a+b;
  }

  /*----------End unit test-----------*/
  constructor() {
    this.singleModel = "1";
    //slide show
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
  public addSlide(): void {
    this.slides.push({
      image: `assets/${ this.slides.length % 8 + 1 }.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }


  @ViewChild('staticModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  public click() {
    if (this.singleModel == "0") {
      this.singleModel = "1";
    } else {
      this.singleModel = "0";
    }
  }


  //pagination
  public totalItems:number = 64;
  public currentPage:number = 4;
  public smallnumPages:number = 0;

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }


  ngOnInit() {

  }

}

