import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-modal-info2',
  templateUrl: './modal-info2.component.html',
  styleUrls: ['./modal-info2.component.scss']
})
export class ModalInfo2Component implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
