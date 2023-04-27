import { Component } from '@angular/core';
import { faUser, faLightbulb, faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cta-buttons',
  templateUrl: './cta-buttons.component.html',
  styleUrls: ['./cta-buttons.component.css']
})
export class CtaButtonsComponent {
  faUser = faUser;
  faLightbulb = faLightbulb;
  faClipboard = faClipboardList;
}
