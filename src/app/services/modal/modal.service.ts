import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSource = new BehaviorSubject(false);
  currentModal = this.modalSource.asObservable();


  constructor() { }

  toggleModal(isOpen) {
    this.modalSource.next(!isOpen);
  }
}
