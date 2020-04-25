import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

// todo: dedicated file
export interface NavStyle {
  backgroundColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private style: NavStyle = {
    backgroundColor: '#00000000'
  };

  stylesChanged = new Subject<NavStyle>();
  sideBarClosed = new Subject<void>();

  constructor() { }

  setStyles(styles: Partial<NavStyle>) {
    this.style = {
      ...this.style,
      ...styles
    };
    this.stylesChanged.next(this.style);
  }

  darkMode() {
    this.setStyles({
      backgroundColor: '#222222'
    });
  }

  lightMode() {

  }

  transparentMode() {
    this.setStyles({
      backgroundColor: '#00000000'
    });
  }

  closeSideBar() {
    this.sideBarClosed.next();
  }
}
