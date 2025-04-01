import { Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  // data :{}={}



  constructor( private ApiService: ApiService){}
postdata() {

 const data= {userId:2, body:"this is the body posted by posted methods " , title:"posting successfully"}


      this.ApiService.postposts(data)
      // .subscribe(
    // (response :any)=>{
    //   console.log("this is posted data", response);

    // // this.ApiService.getPosts().subscribe((response:any)=> {
    // //   console.log(response);
    // // })


    // },(error:any )=>{
    //   console.log(error)
    // }
    //     )

}




}
