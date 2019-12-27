import { Component, OnInit } from '@angular/core';
import {profile} from './data/profile_data';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = `It's me Arul`;
  aboutMe: string;
  selectedEmployer: {} = profile.experience[0];
  profile: {
    skills: any;
    header: {
      about: any;
    };
  };

  constructor() {
  }
  ngOnInit(): void {
    this.profile = profile;
    const startDate = (moment('04/01/2012'));
    const today = moment().startOf('day');
    const dateMomentObject = moment.duration(today.diff(startDate));
    const fullDate = `${dateMomentObject.years()} years ${dateMomentObject.months()} months  ${dateMomentObject.days()} days`;
    this.aboutMe = profile.header.about.replace('#experience', fullDate);
    const regex = /(?:^|\W)#(\w+)(?!\w)/g;
    this.aboutMe = this.aboutMe.split(' ').map(word => word.replace(regex,`<span class="highlight">${word.split('#')[1]}</span>`)).join(' ');
    console.log(this.aboutMe)
  }

  selectEmployer(data) {
    this.selectedEmployer = data;
  }

}
