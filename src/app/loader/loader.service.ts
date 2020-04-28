import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingChanged = new Subject<boolean>();
  flashed = false;

  constructor() { }

  start() {
    this.loadingChanged.next(true);
  }

  stop() {
    if (!this.flashed) {
      this.loadingChanged.next(false);
    }
  }

  flash(timeoutMs: number = 1000) {
    this.flashed = true;
    this.start();
    setTimeout(() => {
      this.flashed = false;
      this.stop();
    }, timeoutMs);
  }
}
