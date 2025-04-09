import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

initial:number=0;
annual:number=0;
interst:number=6;
duration:number=10;


Investcalculator(value:any){
// console.log(Initialvalue.initial)
console.log(value)
this.initial=value.initial;
this.annual=value.annual;
this.interst=value.interest;
this.duration=value.duration;

this.calculateTable()
}
  calculateTable(){

    for (let i=0; i< this.duration; i++){
        let year=i+1;
        let interest= (this.initial+this.annual)*this.interst/100;
        let investmentvalue= interest+(this.initial+this.annual);
    }

  }

}
