import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LearnMoreComponent} from './learn-more/learn-more.component';
import {AuthGuard} from './common/guards/auth.guard';
import {AccountComponent} from './account/account.component';
import {SettingsComponent} from './settings/settings.component';
import {FetchUserGuard} from './common/guards/fetchUser.guard';
import {RedirectToPlaylistsGuard} from './common/guards/redirectToPlaylists.guard';
import {PlaylistsComponent} from './playlists/playlists.component';
import {FetchPlaylistsGuard} from './common/guards/fetchPlaylists.guard';
import {FetchSongsGuard} from './common/guards/fetchSongs.guard';
import {SongsComponent} from './songs/songs.component';
import {SetPlaylistFromRouteGuard} from './common/guards/setPlaylistFromRoute.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [FetchUserGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [RedirectToPlaylistsGuard]
      },
      {
        path: 'learn-more',
        component: LearnMoreComponent
      },
      {
        path: 'playlists',
        component: PlaylistsComponent,
        canActivate: [AuthGuard, FetchPlaylistsGuard]
      },
      {
        path: 'playlists/:id/songs',
        component: SongsComponent,
        canActivate: [AuthGuard, FetchPlaylistsGuard, SetPlaylistFromRouteGuard, FetchSongsGuard]
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
