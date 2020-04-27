import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LearnMoreComponent} from './learn-more/learn-more.component';
import {AuthGuard} from './common/guards/auth.guard';
import {AccountComponent} from './account/account.component';
import {SettingsComponent} from './settings/settings.component';
import {FetchUserGuard} from './common/guards/fetchUser.guard';
import {RedirectToPlaylistsGuard} from './common/guards/redirectToPlaylists.guard';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LearnMoreComponent,
    AccountComponent,
    SettingsComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    FetchUserGuard,
    RedirectToPlaylistsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
