import { Component } from '@angular/core';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

submittedData:string=''


openModal(){
  const modalComponent = new ModalPopupComponent();
  modalComponent.openModal();
}

handleModalSubmitted(data:string){
this.submittedData = data

}


isEven  = ""
count:number=0;
isNotdisable=false;
isNotdisable1=false

evenodd(){
if (this.count%2==0) {
  this.isEven = "Odd"

} else {
  this.isEven= "Even"
}


}


  inc(){

if(this.count>=20)
window.alert('Allows Below Twenty '),
this.isNotdisable = true;


else{
  this.evenodd()
  this.count++
  this.isNotdisable1 = false
 
}


  }
  dec(){
if(this.count<=0){
this.isNotdisable1 = true
window.alert('Allows Above Zero  ')
}
else{
  this.evenodd()
this.count--
this.isNotdisable=false;


}
 
  }
  res(){
    this.count=0 
    this.isNotdisable = false 
    this.isNotdisable1 = false
    this.isEven = " "
  }
  openiModal(){

    document.getElementById('Mdi')!.style.display='block'
  }
  closeiModal(){
    document.getElementById('Mdi')!.style.display='none'
  }

  name = "shekhar";
  isShekhar = false;
  value!:string;
  fun()
  {
    if (this.isShekhar) {
      this.isShekhar = false;
            document.body.classList.remove('overlay');

    }
    else
    {
      this.isShekhar = true
            document.body.classList.add('overlay');

      }
  }
  opMd(){
    document.getElementById('md')!.style.display='block'
  } 
  opCl(){
    document.getElementById('md')!.style.display='none'
  }
}
