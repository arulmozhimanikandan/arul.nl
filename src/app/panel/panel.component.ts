import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnChanges {

  @Input() experience: {
    projects: any[];
    name: string;
  };
  selectedProjectIndex = 0;
  selectedProject: {
    Description: string;
    name: string;
  }

  constructor() {
  }

  ngOnInit() {
    this.selectedProject = this.experience.projects[0];
  }

  ngOnChanges(changes) {
    this.selectedProject = this.experience.projects[0];
    this.selectedProjectIndex = 0;

  }

  nextProject() {
    this.selectedProjectIndex++;
    if (this.selectedProjectIndex < this.experience.projects.length) {
      this.selectedProject = this.experience.projects[this.selectedProjectIndex];
    } else {
      this.selectedProjectIndex --;
    }

  }

  previousProject() {
    this.selectedProjectIndex--;
    if (this.selectedProjectIndex >= 0) {
      this.selectedProject = this.experience.projects[this.selectedProjectIndex];
    } else {
      this.selectedProjectIndex ++;
    }
  }

}
