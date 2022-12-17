import { Component } from '@angular/core';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
