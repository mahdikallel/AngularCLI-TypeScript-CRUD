import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
@Component({
  selector: 'app-design',
  templateUrl: 'design.component.html',
  styleUrls: ['design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }

  @ViewChild('staticModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
  ngOnInit() {

  }

}
