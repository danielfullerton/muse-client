import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SpotifyService} from '../services/spotify.service';
import {Injectable} from '@angular/core';

@Injectable()
export class SetPlaylistFromRouteGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly spotifyService: SpotifyService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const id = route.params.id;
    if (!id) {
      this.router.navigate(['/'])
        .catch(console.error);
      return false;
    }

    try {
      await this.spotifyService.fetchSelectedPlaylist(id).toPromise();
      return true;
    } catch (e) {
      this.router.navigate(['/'])
        .catch(console.error);
      return false;
    }
  }
}
