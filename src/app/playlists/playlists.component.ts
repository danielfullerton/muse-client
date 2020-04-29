import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpotifyService} from '../common/services/spotify.service';
import {Subscription} from 'rxjs';
import {NavigationService} from '../navigation/navigation.service';
import {Router} from '@angular/router';
import {Resource} from '../common/components/resource-scroller/resource-scroller.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  playlists: any[];
  playlistsChanged: Subscription;

  resources: Resource[];

  constructor(
    private spotifyService: SpotifyService,
    private readonly navigationService: NavigationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navigationService.setTitle('Playlists');
    this.playlists = this.spotifyService.getPlaylists();
    this.setResources();
    this.playlistsChanged = this.spotifyService.playlistsChanged.subscribe(playlists => {
      this.playlists = playlists;
      this.setResources();
    });
  }

  ngOnDestroy() {
    this.playlistsChanged.unsubscribe();
  }

  playlistSelected(playlist: any) {
    this.spotifyService.setSelectedPlaylist(playlist);
    this.router.navigate(['/songs'])
      .catch(console.error);
  }

  private setResources() {
    this.resources = this.playlists.map(playlist => {
      return {
        subText: 'Contains ' + playlist.tracks.total + ' tracks',
        displayName: playlist.name,
        onOptionsClick: () => {},
        onItemClick: () => this.playlistSelected(playlist)
      };
    });
  }
}
