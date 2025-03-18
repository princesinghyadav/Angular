import { Component } from '@angular/core';
import { JsonComponent } from '../json/json.component';
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {

  
data = new JsonComponent()
jsonData = this.data.fakedata;

  set(id :number){

    localStorage.setItem("user",JSON.stringify(this.jsonData[id]))
  }
 
}
