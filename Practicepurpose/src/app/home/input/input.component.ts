import { Component,Output ,EventEmitter } from '@angular/core';

type Invalue={
initial:String,
annual:string,
duration:string,
interest:string
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

@Output() Calculate = new EventEmitter<Invalue>()

  InvestmentValue  ={initial:'0', annual:'0', duration:'2',interest:'6'};

  onSubmit(forms:any){
 this.Calculate.emit(this.InvestmentValue)



  }
}
