import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

userdetails:any= new FormGroup({
   namee:new FormControl("",[Validators.required, Validators.minLength(4)]),
   emaill:new FormControl("",[Validators.required, Validators.email]),
   passwordd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
})


submission(){
  if(this.userdetails.valid){
    console.log("Formdetails :-",this.userdetails.value)
  }else{
    console.log("your form is invalid");
  }


}

}
