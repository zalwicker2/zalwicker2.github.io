import { Component, Input } from '@angular/core';
import { Experience } from '../experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() experience: Experience = {
    title: 'test',
    start: 'January 2001',
    end: 'January 2101',
    description: "Uh oh, you shouldn't be seeing this.",
  };
}
