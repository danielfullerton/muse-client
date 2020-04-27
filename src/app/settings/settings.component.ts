import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth.service';
import {User} from '../common/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  user: User;
  userChanged: Subscription;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userChanged = this.authService.userChanged.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userChanged.unsubscribe();
  }

  onSpotifyConnect() {
    if (!this.user.spotifyId) {
      this.authService.startSpotifySignIn();
    }
  }

  onYoutubeConnect() {
    if (!this.user.youtubeConnected) {
      this.authService.startYoutubeSignIn();
    }
  }
}
