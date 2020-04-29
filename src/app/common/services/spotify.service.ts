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

  private selectedPlaylist: any = null;
  selectedPlaylistChanged = new Subject<any>();

  private songs = [];
  songsChanged = new Subject<any[]>();

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

  fetchSelectedPlaylist(id: string) {
    return this.http.get('/v1/spotify/playlists/' + id)
      .pipe(tap((playlist) => {
        this.setSelectedPlaylist(playlist);
        this.selectedPlaylistChanged.next(playlist);
      }));
  }

  getSelectedPlaylist() {
    return this.selectedPlaylist;
  }

  setSelectedPlaylist(playlist: any) {
    this.selectedPlaylist = playlist;
    this.selectedPlaylistChanged.next(playlist);
  }

  fetchSongs(id: string) {
    return this.http.get('/v1/spotify/playlists/' + id + '/songs')
      .pipe(tap((songs: any) => {
        this.songs = songs.items;
        this.songsChanged.next(songs.items);
      }));
  }

  getSongs() {
    return this.songs;
  }
}
