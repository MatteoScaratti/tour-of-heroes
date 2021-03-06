import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiService } from './in-memory-web-api.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

@NgModule({
   declarations: [
      AppComponent,
      HeroComponent,
      HeroDetailComponent,
      MessagesComponent,
      DashboardComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,

      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryWebApiService, {dataEncapsulation: false}
      )
   ],
   providers: [
      HeroService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
