import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify',
  template: 'Redirecting...',
})
export class SpotifyComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'https://spotify-bracket-frontend.azurewebsites.net/'
  }
}
