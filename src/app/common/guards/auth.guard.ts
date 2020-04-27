import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const url = '/' + route.url.map(seg => seg.path).join('/');
    const user = this.authService.getUser();
    if (!user) {
      window.location.replace(this.authService.getGoogleAuthUrl({ redirectPath: url }));
    }
    return true;
  }
}
