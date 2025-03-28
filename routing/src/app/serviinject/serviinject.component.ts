import { Component } from '@angular/core';
import { serviinjectservice } from './serviinject.service';




@Component({
  selector: 'app-serviinject',
  templateUrl: './serviinject.component.html',
  styleUrls: ['./serviinject.component.css']
})
export class ServiinjectComponent {

  // narr : {}={};
  narr:string[]=[];

  isworking :boolean
  iss!:number

toggle!:()=> void;


// toggle:numbe



  constructor (public serviinjectservice: serviinjectservice){
    this.narr=this.serviinjectservice.revealdata()
// console.log(this.narr[0])
this.isworking=this.serviinjectservice.workin();

// this.toggle=this.serviinjectservice.toggle()


}

test(){
  this.serviinjectservice.toggle()
this.isworking=this.serviinjectservice.workin();

  // console.log(this.serviinjectservice.toggle())


}


}
