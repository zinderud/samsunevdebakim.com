import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule,ReactiveFormsModule]
})
export class HomeModule { }
