import { Component } from '@angular/core';
import { faMusic, faTrophy, faGamepad, faHeart, faSmile, faSmileBeam, faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faMusic = faMusic;
  faTrophy = faTrophy;
  faGamepad = faGamepad;
  faHeart = faHeart;
  faSmile = faSmileBeam;
  faChart = faChartLine;
}
