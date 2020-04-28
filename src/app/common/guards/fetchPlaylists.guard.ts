import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SpotifyService} from '../services/spotify.service';

@Injectable()
export class FetchPlaylistsGuard implements CanActivate {
  constructor(
    private readonly spotifyService: SpotifyService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      await this.spotifyService.fetchPlaylists().toPromise();
      return true;
    } catch (e) {
      alert('Failed to load Spotify playlists. Please try again later.');
      return false;
    }
  }
}
