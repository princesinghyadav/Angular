import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { CheckComponent } from './check/check.component';
import { CustomComponent } from './custom/custom.component';
import { EventComponent } from './event/event.component';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent,SignupComponent,CheckComponent,CustomComponent,EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Learning prospective';

  check ='f0r checking '
    test = ()=>{
    let  x="89";
    console.log(x)

  }
  
}

