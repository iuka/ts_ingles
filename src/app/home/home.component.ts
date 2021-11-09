import { Component, OnInit } from '@angular/core';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { ModalInfo2Component } from '../modal-info2/modal-info2.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }
  openModal() {
    this.modalRef = this.modalService.show(ModalInfoComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-notify modal-info  modal-dialog modal-lg ',
        containerClass: 'top',
        animated: true
    });
  }

  openModal2() {
    this.modalRef = this.modalService.show(ModalInfo2Component, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-notify modal-info  modal-dialog modal-lg ',
        containerClass: 'top',
        animated: true
    });
  }


  ngOnInit(): void {
  }

}
