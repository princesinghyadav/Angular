import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class ApiService {

postss:any[]=[];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http : HttpClient) { }



  getPosts() : any {
    let pos=this.http.get(this.apiUrl).subscribe((response:any)=>{
console.log(response ,"this is the repos from server side rendering. ");
this.postss=response;
      return response
    },
    (erro:any) => {
      console.log(erro)
    })
    return  this.postss;
  }

  postposts(data:any) :any{

 this.http.post(this.apiUrl,data).subscribe(
  (response)=>{
    console.log(response, "this is the posted data which we have posted right now ");
    this.postss.push(response);

  },
  (error)=>{
    console.log(error);
  }
 )

}


updatedata(id:number , updatedata:any){

  return this.http.put(`${this.apiUrl}/${id}`,updatedata).subscribe((response)=>{
    console.log(response,"this is the updated data");

  },(error)=>{
    console.log(error);
  })


}

deletePost(Id: number) {
  return this.http.delete(`${this.apiUrl}/${Id}`);
}

}
