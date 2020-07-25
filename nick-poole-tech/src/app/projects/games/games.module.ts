import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';

import { GamesComponent } from './games.component';
import { WildfireComponent } from './wildfire/wildfire.component';

@NgModule({
  declarations: [
    GamesComponent,
    WildfireComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
