import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SpotifyService} from '../services/spotify.service';
import {LoaderService} from '../../loader/loader.service';

@Injectable()
export class FetchPlaylistsGuard implements CanActivate {
  constructor(
    private readonly spotifyService: SpotifyService,
    private readonly loaderService: LoaderService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      this.loaderService.flash(750);
      this.loaderService.start();
      await this.spotifyService.fetchPlaylists().toPromise();
      this.loaderService.stop();
      return true;
    } catch (e) {
      alert('Failed to load Spotify playlists. Please try again later.');
      return false;
    }
  }
}
