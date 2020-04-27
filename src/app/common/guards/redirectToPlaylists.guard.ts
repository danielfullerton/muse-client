import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Injectable()
export class RedirectToPlaylistsGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.getUser()) {
      this.router.navigate(['/playlists'])
        .catch(console.error);
    }
    return true;
  }
}
