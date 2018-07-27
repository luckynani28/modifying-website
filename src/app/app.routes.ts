import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NeedexploreComponent } from './portfolio/needexplore/needexplore.component';
import { TeamComponent } from './team/team.component';
import { SeeexploreComponent } from './portfolio/seeexplore/seeexplore.component';
import { FreeexploreComponent } from './portfolio/freeexplore/freeexplore.component';
import { PinkexploreComponent } from './portfolio/pinkexplore/pinkexplore.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Cinema143Component } from './portfolio/cinema143/cinema143.component';
import { EasyleadComponent } from './portfolio/easylead/easylead.component';
import { EventusComponent } from './portfolio/eventus/eventus.component';
// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'port', component: PortfolioComponent },
  { path: 'need', component: NeedexploreComponent },
  { path: 'see', component: SeeexploreComponent },
  { path: 'free', component: FreeexploreComponent },
  { path: 'pink', component: PinkexploreComponent },
  { path: 'Cinema143', component: Cinema143Component },
  { path: 'easy', component: EasyleadComponent },
  { path: 'event', component: EventusComponent },
  { path: 'team', component: TeamComponent },

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
