import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaComponent } from './tea.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tea', pathMatch: 'full' },
  { path: 'tea', component: TeaComponent },
  { path: 'tea-detail', component: TeaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaRoutingModule { }
