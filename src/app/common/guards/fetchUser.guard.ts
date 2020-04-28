import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {LoaderService} from '../../loader/loader.service';

@Injectable()
export class FetchUserGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      this.loaderService.flash(750);
      this.loaderService.start();
      await this.authService.fetchUser().toPromise();
      this.loaderService.stop();
    } catch (e) { }
    return true;
  }
}
