import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

   count:string |number=''

   handleclick(event:Event){
    this.count=(event.target as HTMLInputElement).value
    
    console.log("this is ",event.type , this.count)
   }
// second method to get value from input 
   getvalue(val:string |number){

    this.count=val;
   }
   setvalue(){
    this.count="set@gmail.com"
   }
}
