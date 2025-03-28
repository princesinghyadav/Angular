import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    list =[
      {
        path:'directives',
        label:"Directives"
      },
      {
        path:'binding',
        label:'binding'
      },
      {
        path:'forms',
        label:'forms'
      },{
        path:'reactive',
        label:'reactive-forms '
      }
    ]
}
