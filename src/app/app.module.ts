import { CinemaService } from './cinema.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NeedexploreComponent } from './portfolio/needexplore/needexplore.component';
import { SeeexploreComponent } from './portfolio/seeexplore/seeexplore.component';
import { FreeexploreComponent } from './portfolio/freeexplore/freeexplore.component';
import { PinkexploreComponent } from './portfolio/pinkexplore/pinkexplore.component';
import { TeamComponent } from './team/team.component';
import { Cinema143Component } from './portfolio/cinema143/cinema143.component';
import { EasyleadComponent } from './portfolio/easylead/easylead.component';
import { EventusComponent } from './portfolio/eventus/eventus.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,

    NeedexploreComponent,

    SeeexploreComponent,
    FreeexploreComponent,
    PinkexploreComponent,
    TeamComponent,
    Cinema143Component,
    EasyleadComponent,
    EventusComponent,
    CinemaService

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
