import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import {StepperOrientation} from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({

  selector: 'app-video-tutorial',
  templateUrl: './video-tutorial.component.html',
  styleUrls: ['./video-tutorial.component.scss']

})


export class VideoTutorialComponent implements OnInit {

  safeURL: any;
  
  videoURL: any;

  videoURL2: any;

  safeURL2: any;


  stepperOrientation: Observable<StepperOrientation>

  constructor(private _sanitizer: DomSanitizer, 
    
    breakpointObserver: BreakpointObserver) { 

    this.videoURL = "https://www.youtube.com/embed/x9wbDHKTwi0"

    this.videoURL2 = "https://www.youtube.com/embed/Bw6qHrtaBDY"

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL)

    this.safeURL2 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL2)

    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)').pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

  }


  ngOnInit(): void {


  }

}
