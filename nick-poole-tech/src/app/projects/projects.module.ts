import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GamesModule } from './games/games.module';
import { WebAppsModule } from './web-apps/web-apps.module';

import { ProjectsComponent } from './projects.component';
import { WebAppsComponent } from './web-apps/web-apps.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    WebAppsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    GamesModule,
    WebAppsModule
  ]
})
export class ProjectsModule { }
