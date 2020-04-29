import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {LoaderService} from '../../loader/loader.service';

@Injectable()
export class FetchSongsGuard implements CanActivate {
  constructor(
    private readonly spotifyService: SpotifyService,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.spotifyService.getSelectedPlaylist()) {
      this.router.navigate(['/'])
        .catch(console.error);
      return true;
    }
    try {
      this.loaderService.flash();
      this.loaderService.start();
      await this.spotifyService.fetchSongs().toPromise();
      this.loaderService.stop();
    } catch (e) {
      alert('Failed to fetch songs');
    }
    return true;
  }
}
