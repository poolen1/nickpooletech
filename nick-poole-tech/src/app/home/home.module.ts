import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
