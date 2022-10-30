import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexVideojuegosComponent } from './index-videojuegos/index-videojuegos.component';
import { IndexReviewsComponent } from './index-reviews/index-reviews.component';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { DetailVideogameComponent } from './detail-videogame/detail-videogame.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexVideojuegosComponent,
    IndexReviewsComponent,
    CreateVideogameComponent,
    CreateReviewComponent,
    DetailVideogameComponent,
    DetailReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
