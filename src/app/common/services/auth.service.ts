import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  userChanged = new Subject<User>();

  constructor(
    private http: HttpClient
  ) {}

  startGoogleSignIn() {
    window.location.replace('http://localhost:3000/v1/auth/google/signIn');
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
