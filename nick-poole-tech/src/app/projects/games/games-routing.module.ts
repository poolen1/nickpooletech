import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';
import { WildfireComponent } from './wildfire/wildfire.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: '', component: GamesComponent
  },
  { 
    path: 'wildfire', component: WildfireComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
