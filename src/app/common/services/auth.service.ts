import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

// todo: dedicate file
export interface StateObject {
  redirectPath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  userChanged = new Subject<User>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  buildQueryString(obj: any) {
    return '?' + Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
  }

  getGoogleAuthUrl(stateObject: StateObject = {}) {
    const queryString = this.buildQueryString(stateObject);
    return 'http://localhost:3000/v1/auth/google/signIn' + queryString;
  }

  getSpotifyAuthUrl() {
    return 'http://localhost:3000/v1/auth/spotify/signIn';
  }

  getYoutubeAuthUrl() {
    return 'http://localhost:3000/v1/auth/youtube/signIn';
  }

  startGoogleSignIn() {
    const url = this.getGoogleAuthUrl({ redirectPath: this.router.url });
    window.location.replace(url);
  }

  startSpotifySignIn() {
    window.location.replace(this.getSpotifyAuthUrl());
  }

  startYoutubeSignIn() {
    window.location.replace(this.getYoutubeAuthUrl());
  }

  getUser() {
    return this.user;
  }

  fetchUser() {
    return this.http.get('/v1/auth/user')
      .pipe(tap((user: User) => {
        this.user = user;
        this.userChanged.next(user);
      }));
  }
}
