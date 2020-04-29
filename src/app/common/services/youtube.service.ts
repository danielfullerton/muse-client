import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(
     private readonly http: HttpClient
  ) { }

  convertSong(songName: string, songArtist: string) {
    return this.http.post('/v1/youtube/convert/song', {
      name: songName,
      artist: songArtist
    });
  }
}
