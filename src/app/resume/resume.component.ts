import { Component } from '@angular/core';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
