import { Component } from '@angular/core';
import { Validator, FormGroup ,FormControl } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

user:any ={name:'', gender:"" ,email:"",contact:"",password:''}

 isSubmitted :boolean=false;

//  if( user.name=="" ){
//   console.log( user.name)
//  isSubmitted=true;

// }

onSubmit(form:any){
  if(form.invalid){
    alert("please fill mandatory information ")
    return
  }
  //  else{
     console.log("userdetails :",this.user);
    this.isSubmitted=true;
  // }


}








 submitted :boolean=false

 full:any={name:""}

  final(){

    console.log(this.full);

    this.submitted=true
  }

}
