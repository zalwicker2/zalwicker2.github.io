import { Component } from '@angular/core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedIn = faLinkedin
}
