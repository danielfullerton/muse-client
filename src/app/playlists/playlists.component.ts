import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpotifyService} from '../common/services/spotify.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  playlists: any[];
  playlistsChanged: Subscription;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.playlists = this.spotifyService.getPlaylists();
    this.playlistsChanged = this.spotifyService.playlistsChanged.subscribe(playlists => {
      this.playlists = playlists;
    });
  }

  ngOnDestroy() {
    this.playlistsChanged.unsubscribe();
  }

}
