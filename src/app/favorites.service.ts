import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  isFavourite(movie: any): boolean {
    const favorites = this.getFavoritesFromStorage();
    return favorites.some((favorite: any) => favorite.id === movie.id);
  }

  getFavoritesFromStorage(): any[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  setFavoritesInStorage(favorites: any[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  toggleFavourite(movie: any): any[] {
    const favorites = this.getFavoritesFromStorage();
    const index = favorites.findIndex((favorite: any) => favorite.id === movie.id);

    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(movie);
    }

    this.setFavoritesInStorage(favorites);
    return favorites;
  }
}
