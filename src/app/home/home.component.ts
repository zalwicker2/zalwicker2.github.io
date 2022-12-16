import { Component } from '@angular/core';
import { faUser, faLightbulb, faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faUser = faUser;
  faLightbulb = faLightbulb;
  faClipboard = faClipboardList;
}
