import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: {
    liveLink: string;
    sourceUrl: string;
    embedVideo: string;
  };
  IframeVideo: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.IframeVideo = this.sanitizer.bypassSecurityTrustHtml(this.post.embedVideo)
  }

}
