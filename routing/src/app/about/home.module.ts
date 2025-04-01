import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { FormsComponent } from '../forms/forms.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';
import { BindingComponent } from '../binding/binding.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations:[AboutComponent,FormsComponent,DirectivesComponent,
    ReactiveformsComponent,BindingComponent],
    imports  : [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  exports:[AboutComponent,FormsComponent,DirectivesComponent,
    ReactiveformsComponent,BindingComponent]


})


export class    HomeModule{


}
