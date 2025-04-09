import { Component } from '@angular/core';
import { Input  } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


    @Input({required:true}) src :string="image link";
    @Input({required:true}) alt:string ="image alt";
    @Input ({required:true}) head :string ="Heading";



}
