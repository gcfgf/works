import { Component, EventEmitter,Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.css'
})
export class ModalPopupComponent {
@Output() modalSubmitted : EventEmitter<string> = new EventEmitter()
  inputValue : string = ""
  
  openModal(){
    document.getElementById('myModal')!.style.display = 'block'
  }
  closeModal(){
    document.getElementById('myModal')!.style.display = 'none'
  }

  submit(){
    this.modalSubmitted.emit(this.inputValue)
  }


}
