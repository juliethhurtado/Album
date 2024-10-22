import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://51.79.72.198:3000/albums'; 

  constructor(private http: HttpClient) {}

  createAlbum(album: Album): Observable<any> {
    return this.http.post(this.apiUrl, album);
  }
}
