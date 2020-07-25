import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GamesModule } from './games/games.module';

import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    GamesModule
  ]
})
export class ProjectsModule { }
