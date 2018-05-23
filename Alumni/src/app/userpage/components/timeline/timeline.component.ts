import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [routerTransition()] 
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
