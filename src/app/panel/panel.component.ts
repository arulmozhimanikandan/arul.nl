import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  animations: [
    trigger('flipState', [
      state('active', style({
        opacity:0
      })),
      state('inactive', style({
        opacity:1
      })),
      transition('active => inactive', animate('300ms ease-out', style({opacity:1}))),
      transition('inactive => active', animate('300ms ease-in', style({opacity:1})))
    ])
  ],
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnChanges {

  @Input() experience: {
    projects: any[];
    name: string;
  };
  swiped: string;
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
      this.swiped = 'active';
      setTimeout(() => { this.swiped = 'inactive'},300)
    } else {
      this.selectedProjectIndex --;
    }

  }

  previousProject() {
    this.selectedProjectIndex--;
    if (this.selectedProjectIndex >= 0) {
      this.swiped = 'active';
      setTimeout(() => { this.swiped = 'inactive'},300)
      this.selectedProject = this.experience.projects[this.selectedProjectIndex];
    } else {
      this.selectedProjectIndex ++;
    }
  }

}
