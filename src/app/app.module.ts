import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexVideojuegosComponent } from './index-videojuegos/index-videojuegos.component';
import { IndexReviewsComponent } from './index-reviews/index-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexVideojuegosComponent,
    IndexReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
