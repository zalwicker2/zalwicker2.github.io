import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  @Input('project') project: any;
  @Input() index: number = 0;

  getDirection = () => this.index % 2 == 0 ? 'row' : 'row-reverse';
}
