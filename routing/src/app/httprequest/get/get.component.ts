import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  posts :any[] = [];

constructor (private ApiService :ApiService){}

ngOnInit() {

this.posts=this.ApiService.getPosts()


console.log(this.posts)



// this.ApiService.getPosts().subscribe(
// (response:any) => {
//   console.log(typeof(response))
//   this.posts= response;
//   console.log("this is the posts",this.posts)
// },
// (erro:any) => {
//   console.log(erro)
// }

// );
}





}
