import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class FetchUserGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      await this.authService.fetchUser().toPromise();
    } catch (e) { }
    return true;
  }
}
