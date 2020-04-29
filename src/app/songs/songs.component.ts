import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpotifyService} from '../common/services/spotify.service';
import {Subscription} from 'rxjs';
import {NavigationService} from '../navigation/navigation.service';
import {Resource} from '../common/components/resource-scroller/resource-scroller.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit, OnDestroy {
  songs: any[];
  playlist: any;
  songsChanged: Subscription;

  resources: Resource[];

  constructor(
    private readonly spotifyService: SpotifyService,
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.navigationService.setTitle('Songs');
    this.playlist = this.spotifyService.getSelectedPlaylist();
    this.songs = this.spotifyService.getSongs();
    this.setResources();
    this.songsChanged = this.spotifyService.songsChanged.subscribe(songs => {
      this.songs = songs;
      this.setResources();
    });
  }

  ngOnDestroy() {
    this.songsChanged.unsubscribe();
  }

  private setResources() {
    console.log(this.songs);
    this.resources = this.songs.map(song => {
      return {
        onItemClick: () => {},
        onOptionsClick: () => {},
        displayName: song.track.name,
        subText: song.track.artists[0].name
      };
    });
  }

  backButtonClicked() {
    this.router.navigate(['/playlists'])
      .catch(console.error);
  }
}
