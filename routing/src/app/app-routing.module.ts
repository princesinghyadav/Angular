import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { JsonComponent } from './json/json.component';
import { ProComponent } from './pro/pro.component';
import {BindingComponent} from  './binding/binding.component'
import {DirectivesComponent} from './directives/directives.component'
import {FormsComponent} from './forms/forms.component'
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  {
    path:"",component:AboutComponent,
    children:[
      {
        path:'binding',
        title:'binding',
        component:BindingComponent
      },
      {
       path:'directives',
       title:"directives",
       component:DirectivesComponent
      },{
        path:'forms',
        title:'forms',
        component:FormsComponent
      },{
        path:'reactive',
        title:'reactiveforms',
        component:ReactiveformsComponent
      }
    ]

  },
  {
    path:"contact",component:ContactComponent,
    children:[
      {
        path:"first",
        title:"f-child",
        component:FirstchildComponent
      },
      {
       path:"second",
       title:"s-child",
       component:SecondchildComponent
      }
    ]
  },
  {
    path:"product",component:ProductComponent,
    children:[
      {
        path:'list',
        component:ProComponent
      },
      {
        path:':id',
        title:'product',
        component:JsonComponent
      }
    ]
  },
  {
    path:'**',component:NotfoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
