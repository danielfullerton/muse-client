import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private playlists = [];
  playlistsChanged = new Subject<any[]>();

  constructor(
    private http: HttpClient
  ) {}

  getPlaylists() {
    return this.playlists;
  }

  fetchPlaylists() {
    return this.http.get('/v1/spotify/playlists')
      .pipe(tap((playlists: any) => {
        this.playlists = playlists.items;
        this.playlistsChanged.next(playlists.items);
      }));
  }
}
