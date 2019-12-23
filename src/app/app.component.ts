import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as profile from './data/data.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'arulNL';
  selectedEmployer: {} = profile.experience[0];
  profile: {
    experience: [];
    skills: [];
    header: {};
  };

  constructor() {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.profile = profile.default;
  }

  selectEmployer(data) {
    this.selectedEmployer = data;
  }

}
