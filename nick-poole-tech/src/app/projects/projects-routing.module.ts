import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: '', component: ProjectsComponent
  },
  { 
    path: "games", 
    loadChildren: () => import("./games/games.module").then((m) => m.GamesModule) 
  },
  { 
    path: "webapps", 
    loadChildren: () => import("./web-apps/web-apps.module").then((m) => m.WebAppsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
