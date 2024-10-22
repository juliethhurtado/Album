import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumFormComponent } from './components/album-form/album-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlbumFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'album-project';
}
