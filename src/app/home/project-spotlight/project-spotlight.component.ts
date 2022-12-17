import { Component } from '@angular/core';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-project-spotlight',
  templateUrl: './project-spotlight.component.html',
  styleUrls: ['./project-spotlight.component.css']
})
export class ProjectSpotlightComponent {
  faArrow = faCircleArrowRight;
}
