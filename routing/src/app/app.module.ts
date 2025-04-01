import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
// import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { JsonComponent } from './json/json.component';
import { ProComponent } from './pro/pro.component';
// import { BindingComponent } from './binding/binding.component';
// import { DirectivesComponent } from './directives/directives.component';
// import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { PropsshareComponent } from './propsshare/propsshare.component';
import { CreatedComponent } from './product/created/created.component';
import { ServiinjectComponent } from './serviinject/serviinject.component';
import { HomeModule } from './about/home.module';
import { HttpClientModule } from '@angular/common/http';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { GetComponent } from './httprequest/get/get.component';
import { PostComponent } from './httprequest/post/post.component';
import { UpdateComponent } from './httprequest/update/update.component';
import { DeleteComponent } from './httprequest/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    // AboutComponent,
    ContactComponent,
    ProductComponent,
    NotfoundComponent,
    FirstchildComponent,
    SecondchildComponent,
    JsonComponent,
    ProComponent,
    // BindingComponent,
    // DirectivesComponent,
    // FormsComponent,
    // ReactiveformsComponent,
    PropsshareComponent,
    CreatedComponent,
    ServiinjectComponent,
    HttprequestComponent,
    GetComponent,
    PostComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
