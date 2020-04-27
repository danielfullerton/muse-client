import { Component, OnInit } from '@angular/core';
import {AuthService} from '../common/services/auth.service';
import {User} from '../common/models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: User;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  onSpotifyConnect() {
    if (!this.user.spotifyId) {
      this.authService.startSpotifySignIn();
    }
  }
}
