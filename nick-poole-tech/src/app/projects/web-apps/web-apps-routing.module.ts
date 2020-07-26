import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAppsComponent } from './web-apps.component';
import { NptechComponent } from './nptech/nptech.component';
import { UselesstreeComponent } from './uselesstree/uselesstree.component';
import { KsgComponent } from './ksg/ksg.component';

const routes: Routes = [
  { 
    path: '', component: WebAppsComponent
  },
  {
    path: 'nptech', component: NptechComponent
  },
  {
    path: 'uselesstree', component: UselesstreeComponent
  },
  {
    path: 'ksg', component: KsgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppsRoutingModule { }
