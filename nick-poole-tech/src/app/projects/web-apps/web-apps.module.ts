import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppsRoutingModule } from './web-apps-routing.module';

import { NptechComponent } from './nptech/nptech.component';
import { UselesstreeComponent } from './uselesstree/uselesstree.component';
import { KsgComponent } from './ksg/ksg.component';


@NgModule({
  declarations: [
    NptechComponent, 
    UselesstreeComponent, 
    KsgComponent
  ],
  imports: [
    CommonModule,
    WebAppsRoutingModule
  ]
})
export class WebAppsModule { }
