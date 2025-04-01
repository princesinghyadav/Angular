import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  constructor(private ApiService: ApiService){}


  deletedata(){
    this.ApiService.deletePost(3).subscribe(response=>{

    console.log(response, "this is the deleted data ");

    },
  (error)=>{
    console.log(error);
  })

  }
}
