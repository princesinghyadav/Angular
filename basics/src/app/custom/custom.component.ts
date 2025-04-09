import { Component } from "@angular/core";

@ Component({
    selector:"app-custom",
    templateUrl:"./custom.component.html",
    imports:[],
    styleUrl:"./custom.component.css"
})
 
 export  class CustomComponent {
 
   x:string= "properties";
count:number=0;

    handleclick(val:string){
let xx:string = "this is variable"
         console.log("this is a class function no need of using function keyword to c reate a function .");
//   this.otherfunction();
if(val=="minus"){
    this.count=this.count-1
    console.log("this is minus sigh",this.count)
}
    if(val=="plus"){
        this.count=this.count+1
        console.log("this is plus sigh",this.count)
    }
    if(val=="reset"){
        this.count=0
        console.log("this is reset sigh",this.count)
    }
    }
    otherfunction  (){
        console.log("we have to use this keyword for calling this function in another function no need of closures.")
    
    }
    
 }