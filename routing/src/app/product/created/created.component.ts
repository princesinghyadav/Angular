import { Component } from '@angular/core';
import { JsonComponent } from 'src/app/json/json.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent {
// pusshobj:any={name:'' ,quantity:'' , price:''}
@Output() formdata = new EventEmitter<{
name:string,
price:string,
quantity:string
}>()
pusshobj :any={id:"", name:"",quantity:"", price:''}
// use:string=''
// data= new JsonComponent
// fdata=this.data.fakedata
creating :boolean  =false

  addedtask(value:any){
this.formdata.emit(this.pusshobj)




// this.fdata.push(this.pusshobj)
//   // this.componentvalue.push()
//   console.log(this.fdata)
this.creating=false;
  }
  cancel(){
    this.creating=false
  }
  iscreatingtask(){

    this.creating =true


    }
}
