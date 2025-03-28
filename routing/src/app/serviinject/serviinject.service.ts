
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  // This makes the service available throughout the app
})


export class serviinjectservice{

cons =["name","class","roll","subject","hockey"]
count :number=0;
isWorking=true;
revealdata(){
return  this.cons;
}
workin(){
return this.isWorking
}
toggle(){
// this.count++
this.isWorking = !this.isWorking

console.log(this.isWorking);

}

}
