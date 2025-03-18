import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
event_ :string =""
  imgur:string="https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?w=299&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"


  isError=true; 
  userName:string=""

    items=[]
    anyfunc(){
      console.log("this is for event binding in which we integrate event ")
      this.event_ ="this is button  integrated with event binding "
// event=event1
    }
}
