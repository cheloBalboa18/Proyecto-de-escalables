import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexReviewsComponent } from './index-reviews/index-reviews.component';
import { IndexVideojuegosComponent } from './index-videojuegos/index-videojuegos.component';

const routes: Routes = [
  { 
    path: 'videojuegos', 
    component: IndexVideojuegosComponent 
  },
  { 
    path: 'reseñas', 
    component: IndexReviewsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
