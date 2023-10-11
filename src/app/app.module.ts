import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { MovieListComponent } from './container/movie-list/movie-list.component';
import { MovieComponent } from './container/movie-list/movie/movie.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './container/favourites/favourites.component';
import { FavoritesService } from './favorites.service';
import { MovieSearchComponent } from './container/movie-search/movie-search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    MovieListComponent,
    MovieComponent,
    FavouritesComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [MovieService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
