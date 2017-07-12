import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // TODO Must Remove

 

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { MenuComponent } from './layout/menu.component';
import { BodyComponent } from './layout/body.component';
import { FooterComponent } from './layout/footer.component';
 

 

 

// Modules
import { CoreModule } from './core/core.module';
import { AppBackendModule } from './app.backend';
import { AppRouterModule } from './app.routing';
import { HomeModule } from './home/home.module';



import { HizmetlerimizComponent } from './pages/hizmetlerimiz/hizmetlerimiz.component';
import { BizkimizComponent } from './pages/bizkimiz/bizkimiz.component';
import { AmacimizComponent } from './pages/amacimiz/amacimiz.component';
import { TanismaComponent } from './pages/tanisma/tanisma.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    HizmetlerimizComponent,
    BizkimizComponent,
    AmacimizComponent,
    TanismaComponent,
   
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
 
    AppBackendModule, AppRouterModule, CoreModule, HomeModule],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
