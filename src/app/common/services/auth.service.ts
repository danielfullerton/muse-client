import {Inject, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {API_PROVIDER, IApiProvider} from '../providers/api.provider';

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
    private router: Router,
    @Inject(API_PROVIDER) private readonly api: IApiProvider
  ) {}

  buildQueryString(obj: any) {
    return '?' + Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
  }

  getGoogleAuthUrl(stateObject: StateObject = {}) {
    const queryString = this.buildQueryString(stateObject);
    return `${this.api.apiUrl}/v1/auth/google/signIn` + queryString;
  }

  getSpotifyAuthUrl(stateObject: StateObject = {}) {
    const queryString = this.buildQueryString(stateObject);
    return `${this.api.apiUrl}/v1/auth/spotify/signIn` + queryString;
  }

  getYoutubeAuthUrl(stateObject: StateObject = {}) {
    const queryString = this.buildQueryString(stateObject);
    return `${this.api.apiUrl}/v1/auth/youtube/signIn` + queryString;
  }

  startGoogleSignIn() {
    const url = this.getGoogleAuthUrl({ redirectPath: this.router.url });
    window.location.replace(url);
  }

  startSpotifySignIn() {
    window.location.replace(this.getSpotifyAuthUrl({ redirectPath: '/home' }));
  }

  startYoutubeSignIn() {
    window.location.replace(this.getYoutubeAuthUrl({ redirectPath: '/settings' }));
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
