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
  profile: {
    skills: any;
    header: {};
  };

  constructor() {
  }
  ngOnInit(): void {
    this.profile = profile.default
  }
}
