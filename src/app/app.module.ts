import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {FetchPlaylistsGuard} from './common/guards/fetchPlaylists.guard';
import { TruncatePipe } from './common/pipes/truncate.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ApiProvider } from './common/providers/api.provider';
import {ApiCallInterceptor} from './common/interceptors/api-call.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LearnMoreComponent,
    AccountComponent,
    SettingsComponent,
    PlaylistsComponent,
    TruncatePipe,
    LoaderComponent
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
    FetchPlaylistsGuard,
    RedirectToPlaylistsGuard,
    ApiProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiCallInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
