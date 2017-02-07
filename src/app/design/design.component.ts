import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
@Component({
  selector: 'app-design',
  templateUrl: 'design.component.html',
  styleUrls: ['design.component.css'],
})
export class DesignComponent implements OnInit {

  constructor() { }

  staticModal(){
    console.log("Modal");
  }
  ngOnInit() {

  }

}
