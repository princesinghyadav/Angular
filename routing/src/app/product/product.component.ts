import { Component, EventEmitter, Output } from '@angular/core';
import { checkingdata } from '../ceckingdat-component';
import { JsonComponent } from '../json/json.component';
const random =Math.floor(Math.random() * checkingdata.length);

@Component({
  selector: 'app-product',

  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {



storedvalue=checkingdata[random]
data = new JsonComponent()

componentvalue=this.data.fakedata

state (){
  const random =Math.floor(Math.random() * checkingdata.length);
    this.storedvalue=checkingdata[random]
}
creating:boolean=false


}
