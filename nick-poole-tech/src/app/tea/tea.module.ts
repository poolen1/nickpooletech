import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaRoutingModule } from './tea-routing.module';

import { TeaComponent } from './tea.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';

@NgModule({
  declarations: [
    TeaComponent,
    TeaDetailComponent
  ],
  imports: [
    CommonModule,
    TeaRoutingModule
  ]
})
export class TeaModule { }
