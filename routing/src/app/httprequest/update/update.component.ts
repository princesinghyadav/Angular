import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  constructor(private ApiService :ApiService){}


  updatedata(){
    let updateddata= {userId:2,title:"updated title",body:"this is the updated body of upate data."}


    this.ApiService.updatedata(1,updateddata)
  }




}
