import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('allMovies') allMoviesButton!: ElementRef;
  @ViewChild('favorites') favoritesButton!: ElementRef;

  windowWidth: number = window.innerWidth;
  breakpointWidth: number = 1000;
  toolbarHeight: number = 80;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateWindowWidth();
    this.updateToolbarHeight();
  }

  constructor() {
    this.updateToolbarHeight();
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  updateToolbarHeight() {
    setTimeout(() => {
      const buttonHeights = [
        this.allMoviesButton.nativeElement.clientHeight,
        this.favoritesButton.nativeElement.clientHeight
      ];

      const maxHeight = Math.max(...buttonHeights);
      this.toolbarHeight = maxHeight;
    });
  }
}
