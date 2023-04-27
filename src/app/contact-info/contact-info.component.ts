import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
