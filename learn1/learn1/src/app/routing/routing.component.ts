import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@Component({
  selector: 'app-routing',
  imports: [HomeComponent,ProductComponent,AboutComponent,ContactComponent,NotfoundComponent],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {

   routes= [
    { path: '', component: HomeComponent },  
    { path: '/home', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: HomeComponent },
    { path: '/product', component: AboutComponent },
    { path: '**', component: NotfoundComponent }  
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
}
