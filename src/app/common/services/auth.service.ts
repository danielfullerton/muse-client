import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  startGoogleSignIn() {
    window.location.replace('http://localhost:3000/v1/auth/google/signIn');
  }

  testAuth() {
    return this.http.get('/v1/auth/user');
  }
}
